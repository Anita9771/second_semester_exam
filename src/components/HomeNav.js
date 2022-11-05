import React from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/images/github-logo.png";
import "./styles.css";
import { Helmet } from "react-helmet";


const HomeNav = () => {
  // const githubLink = "https://github.com/Anita9771/";
  
  return (
    <nav className="home-nav">
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
        <Link className="link" to='/'><h2>ZOOL</h2></Link>
      
      <ul>
        <Link to='/' className="link"><li>Home</li></Link>
        <Link to='/repositories' className="link"><li>Repositories</li></Link>
        <Link to='/services' className="link"><li>Services</li></Link>
      </ul>
      <div className="logo">
        <a href='https://github.com/Anita9771/' target="_blank"><img src={GithubLogo} alt="github logo" /></a>
      </div>
    </nav>
  );
};

export default HomeNav;
