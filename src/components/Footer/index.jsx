import React from 'react';
import './style.css'

function Footer() {
  return (
    <section className="container">
      <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 mb-4 mt-2">
        <p className="col-md-5 mb-0">© 2023 Blank Box Ltd</p>
        <a className="btn btn-primary btn-lg" type="button" href="https://github.com/uberponky/" rel="noopener noreferrer">My GitHub</a>
        <ul className="nav col-md-5 justify-content-end">
          <li className="nav-item"><a href="#portfolio" class="nav-link px-2">Portfolio</a></li>
          <li className="nav-item"><a href="#skills" class="nav-link px-2">Skills</a></li>
          <li className="nav-item"><a href="#contact" class="nav-link px-2">Contact</a></li>
        </ul>
      </footer>
    </section>
  )
}

export default Footer