import React from 'react'
import { Link } from 'react-router-dom'

import "./index.css"

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark  mynav fixed-top">
        <div className="container">
            <Link className="navbar-brand poppins-font-regular brand-name" to="/"><img className='logo me-3' src="./assets/logo.png" alt="logo"/>Get the App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto nav-links">
                <Link to="/" className="nav-link link poppins-font-regular">Investor Relations</Link>
                <Link to="/" className="nav-link link poppins-font-regular">Add restaurant</Link>
                <Link to="/" className="nav-link link poppins-font-regular">Log in</Link>
                <Link to="/" className="nav-link link poppins-font-regular">Sign up</Link>
          
               
            </div>
            </div>
        </div>
</nav>
  </>
  )
}
