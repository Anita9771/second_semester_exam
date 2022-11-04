import React from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../assets/images/error.gif'

const Error404 = () => {
  return (
    <div style={{color: 'white'}} className="error-page">
      <img style={{width: '10rem', height: '10rem', borderRadius: '2rem'}} src={ErrorPage} alt="error -page" />
        <h1>404</h1>
        <h2>This page cannot be found. <br /> Please, check your URL.</h2>
        <Link className="link" to='/'>GO HOME</Link>
    </div>
  )
}

export default Error404