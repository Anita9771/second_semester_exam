import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Pagination } from "../components";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="seo, 404, error boundary, github API, repositories, repository, zool, altschool, exam, second semester"
        />
        <meta
          name="description"
          content="Implement an API fetch of your GitHub portfolio, show a page with a list of all your repositories on GitHub(the page should implement pagination for the repo list), and create another page showing data for a single repo clicked from the list of repos using nested routes while using all the necessary tools in react. Implement the proper SEO, Error Boundary (show a page to test the error boundary) and 404 pages. Good UI and Designs are important."
        />
        <title>ZOOL</title>
      </Helmet>
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
          currentPage={currentPage}
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
