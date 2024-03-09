import React from 'react'
import './style.css'

function Contact() {
  return (
    <section id="contact">
        <div className="container p-5 rounded-5">
          <div className="row flex-lg-row flex-column-reverse">
            <div className="d-flex flex-column align-items-center col-6 col-lg-4 headshot m-auto">
              <i className="fa-solid fa-envelope mb-4 fa-lg"></i>
              <a href="https://blankbox.business/">blankbox.business</a>
              <i className="fa-solid fa-globe mt-4 mb-3 fa-lg"></i>
              <a href="mailto:rory@blankbox.business">rory@blankbox.business</a>
              <i className="fa-solid fa-phone mt-4 mb-3 fa-lg"></i>
              <a href="tel:07739 519 483">07739 519 483</a>
              <i className="fa-solid fa-file-pdf mt-4 mb-3 fa-lg"></i>
              <a href="https://github.com/uberponky/Rory-Simmonds-React-Portfolio/blob/main/src/assets/Rory_Simmonds_CV.pdf?raw=true" target="_blank" rel="noopener noreferrer">Download My CV</a>
            </div>
            <div className="col-lg-8 my-auto text-center text-lg-start pb-3 pb-lg-0">
              <p className="display-5 fw-bold">Think I'm right for your next project?</p>
              <p className="col-lg-11 fs-6">
                I'm an aspiring Front-End Developer living in the UK, I currently work for 
                myself through my business - Blank Box - and hope to offer Front-End 
                Development as a service.
                <br></br>
                If you think I'm right for you, get in touch!
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact