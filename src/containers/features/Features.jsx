import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Passionate about ideating, conceptualizing, and producing consumer-centric as well as B2B technology and technology-enabled products from level zero.',
  },
  {
    title: 'Become the tended active',
    text: 'You will always have the best work methodology at your disposal: CI/CD, Scrum, Kanban, among many more. What will allow you to feel completely cared for from start to finish with your product.',
  },
  {
    title: 'Feel always in contact',
    text: 'I grant you the best ways of communication such as: Zoom, Google meet, Whatsapp and Telegram',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features
