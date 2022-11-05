import React from "react";
import { Helmet } from "react-helmet";

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
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
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {pageNumbers.map((number) => (
          <section key={number}>
            <button
              onClick={() => paginate(number)}
              disabled={currentPage === number}
            >
              {number}
            </button>
          </section>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
