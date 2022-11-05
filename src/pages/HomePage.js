import React from "react";
import ReactLogo from "../assets/images/react-logo.png";
import "./styles.css";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="homepage">
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
      <div className="homepage-contents">
        <div className="left homepage-content">
          <h1>
            Github <br /> API
          </h1>
          <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
          <button>
            <a className="btn" href="https://docs.github.com/en/rest">
              MORE
            </a>
          </button>
        </div>
        <div className="middle homepage-content">
          <p>&</p>
        </div>
        <div className="right homepage-content">
          <img src={ReactLogo} alt="react logo" />
        </div>
      </div>

      <div className="bottom">
        <p>Create integrations, retrieve data, and automate your workflows.</p>
      </div>
    </div>
  );
};

export default HomePage;
