import React from 'react'
import Feature from '../../components/feature/Feature'
import './aboutme.css'

const AboutMe = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Me" text="Hello! How are you?! My name is Dangelo Arrivillaga, I was a freelance developer for two years before joining Microverse. During that time, I built user-friendly websites for some international clients. It was one of my achievements as a web developer. My commitment to delivering quality work on time sets me apart from others." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore my projects</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Languages" text="Ruby, Javascript and PHP" />
      <Feature title="Frameworks" text="Ruby on Rails, React.js, Laravel" />
      <Feature title="Skills" text="Git, GitHub, Heroku, Fly, Docker, Codepen" />
    </div>
  </div>
);

export default AboutMe
