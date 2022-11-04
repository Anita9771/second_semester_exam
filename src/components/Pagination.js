import React from "react";

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
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
