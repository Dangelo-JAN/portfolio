import React from 'react'
import './App.css'

import {
  CTA,
  Brand,
  Navbar
} from './components'

import {
  AboutMe,
  Blog,
  Features,
  Footer,
  Header,
  Possibility
} from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutMe />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
