import React from 'react'
import './style.css'

function Card({ title, description, img, deployedURL, githubURL }) {
  return (
    <div className="col-12 col-md-4 my-2 rounded-5">
      <div className="card p-0 text-center">
        <img src={ img } className="card-img-top" alt="My first project"></img>
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ description }</p>
          <div className="d-flex flex-row gap-2 flex-wrap justify-content-center">
            { deployedURL ? <a href={ deployedURL } className="btn project-btn">Deployed Site</a> : '' }
            <a href={ githubURL } className="btn project-btn">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card