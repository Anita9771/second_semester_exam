import React from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../assets/images/error.gif'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <div style={{color: 'white'}} className="error-page">
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
      <img style={{width: '10rem', height: '10rem', borderRadius: '2rem'}} src={ErrorPage} alt="error -page" />
        <h1>404</h1>
        <h2>This page cannot be found. <br /> Please, check your URL.</h2>
        <Link className="link" to='/'>GO HOME</Link>
    </div>
  )
}

export default Error404