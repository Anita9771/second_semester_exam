import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Pagination } from "../components";

const GithubList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);

      const res = await fetch(
        `https://api.github.com/users/Anita9771/repos?per_page=100`
      );
      const data = await res.json();
      setRepos(data);

      setLoading(false);
    };

    getRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (number) => setCurrentPage(number);

  let lastPage = Math.ceil(repos.length / reposPerPage);

  const navigate = useNavigate();

  return (
    <div className="github-list">
      {loading ? (
        <>
          <PulseLoader
            loading={loading}
            size={100}
            color="#fff"
            className="loader"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <ul className="repos">
          {currentRepos.map((repo) => (
            <div key={repo.id}>
              <li><h3>{repo.name}</h3></li>
              <p>{repo.description}</p>

              <button onClick={() => navigate("/repositories/" + repo.id)}>
              &rarr;
              </button>
              <hr />
            </div>
          ))}
        </ul>
      )}
      <div className="paginate">
        <button
          disabled={currentPage <= 1}
          // aria-disabled={page <= pages}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={repos.length}
          paginate={paginate}
          // disabled={currentPage === paginate}
        />
        <button
          disabled={currentPage >= lastPage}
          // aria-disabled={currentPage >= indexOfLastRepo}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <section style={{textAlign: "right", marginRight: "20%"}}>
      {currentPage} of {lastPage}
      </section>
    </div>
  );
};

export default GithubList;
