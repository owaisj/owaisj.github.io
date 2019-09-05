import React from 'react'
import About from './About'
import Social from './Social'
import Contact from './Contact'

const Footer = () => (
  <footer>
    <div
      className="d-flex flex-row justify-content-around py-3
    bg-dark text-light flex-wrap row m-0"
    >
      <About />
      <Social />
      <Contact />
    </div>
  </footer>
)

export default Footer
