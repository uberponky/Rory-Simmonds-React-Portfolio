import React from 'react'
import Card from '../components/Card'
import projects from '../data/projects.json'
import './style.css'

function Projects() {
  const projectCards = projects.map(project => <Card {...project} key={project.id} />)
  return (
    <section className="container">
      <div id="projects" className="row">
        { projectCards }
      </div>
    </section>
  )
}

export default Projects