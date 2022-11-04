import React from 'react'
import { Link } from 'react-router-dom'
// import HomeNav from '../components/HomeNav'
import ReactLogo from '../assets/images/react-logo.png'
import './styles.css'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <HomeNav /> */}
        <div className="homepage-contents">
          <div className="left homepage-content">
            <h1>Github <br /> API</h1>
            <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
            <button><Link  className="btn" to='https://docs.github.com/en/rest'>MORE</Link></button>
          </div>
          <div className="middle homepage-content"><p>&</p></div>
          <div className="right homepage-content">
          21st century
          <img src={ReactLogo} alt="react logo" />
          </div>
        </div>

        <div className="bottom">
          <p>Create integrations, retrieve data, and automate your workflows.</p>
        </div>
    </div>
  )
}

export default HomePage