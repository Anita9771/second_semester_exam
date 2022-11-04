import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Pagination } from "../components";

const GithubList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(5);
  // const [id, setId] = useState(repo.id);

  

  

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);

      const res = await fetch(`https://api.github.com/users/Anita9771/repos?per_page=100`);
      const data = await res.json();
      setRepos(data);

      setLoading(false);
      
    };
    
    getRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);


  const paginate = (number) =>
    setCurrentPage(number);

  let lastPage = Math.ceil(repos.length / reposPerPage);

  const params = useParams();
  const {repoId} = params

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
              <li>{repo.name}</li>
              <p>{repo.description}</p>
              
              <button onClick={() => navigate('/repositories/' + repo.id)}>check</button>
              <hr />

            </div>
          ))}
        </ul>
      )}
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
      />
      <button
            disabled={currentPage >= lastPage}
            // aria-disabled={currentPage >= indexOfLastRepo}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>

          {currentPage} of {lastPage}

          <br />

          {repoId}
    </div>
  );
};

export default GithubList;
