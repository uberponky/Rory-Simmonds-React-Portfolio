import React from 'react';
import './style.css'

function About() {
  return (
    <section className="jumbotron" id="home">
      <div className="container p-5 rounded-5">
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-8 my-auto text-center text-lg-start">
            <p className="display-5 fw-bold">Learning to build amazing things on the web, one div at a time.</p>
            <p className="col-lg-10 fs-5">Keep reading for my portfolio, about me, and my contact details.</p>
            <a className="btn btn-primary btn-lg" type="button" href="#contact">Get in touch</a>
          </div>
          <div className="col-6 col-lg-4 pb-3 pb-lg-0 headshot m-auto ">
            <img 
              src="./src/assets/rory-bio-picture.jpg" 
              class="img-fluid faded-shadow"
              alt="MY headshot, wearing a blue jumper"
              >
            </img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About