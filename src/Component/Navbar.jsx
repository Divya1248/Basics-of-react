import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-sucess">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./card1.png"
              width="100"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ml-1500 ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <Link className="nav-link" href="#">
                Food Delivery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
