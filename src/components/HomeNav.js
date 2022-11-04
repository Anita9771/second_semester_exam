import React from "react";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/images/github-logo.png";
import "./styles.css";


const HomeNav = ({id}) => {
  const githubLink = "https://github.com/Anita9771/";
  
  return (
    <nav className="home-nav">
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
