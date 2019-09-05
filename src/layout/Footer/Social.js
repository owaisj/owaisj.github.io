import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div className="d-flex flex-column col-sm">
    <h5 className="border-bottom border-light p-1">Connect with me</h5>
    <div className="d-flex flex-column p-1">
      <a href="https://github.com/owaisj">View My Github Page</a>
      <Link to="/contact">Contact Me</Link>
      <a href="https://www.linkedin.com/in/owais-jamil/">Connect on LinkedIn</a>
    </div>
  </div>
)
