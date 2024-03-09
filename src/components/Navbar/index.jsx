import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container navbar-container pt-2 pb-3">
        {/* <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src="./src/assets/BB.svg" 
            alt="Blank Box Logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top text-white pe-2"
          ></img>
          Rory Simmonds
        </a> */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="./src/assets/BB.svg" 
            alt="Blank Box Logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top text-white pe-2"
          ></img>
          <span className="nav-link">Rory Simmonds</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
