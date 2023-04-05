import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request a Zoom Call</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-name_container">
        <p><a href="https://github.com/Dangelo-JAN">Dangelo Arrivillaga</a></p>
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="https://github.com/Dangelo-JAN">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/soluciones-empresariales-dangelo-arrivillaga/">LinkedIn</a></p>
        <p><a href="https://angel.co/u/dangelo-arrivillaga">AngelList</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Caracas, Venezuela</p>
        <p>+58 4142753697</p>
        <p>dangeloarrivillaga@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Dangelo Arrivillaga. All rights reserved.</p>
    </div>
  </div>
);

export default Footer
