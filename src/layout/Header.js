import React, { Fragment } from 'react'
import { Link } from 'gatsby'

export default () => (
  <Fragment>
    <header className="row navbar navbar-dark navbar-expand-lg bg-dark d-flex flex-row justify-content-around m-0">
      <div className="navbar-brand col-sm d-flex justify-content-md-start justify-content-center">
        Owais Jamil
      </div>
      <div className="text-white col-sm text-center d-flex flex-row justify-content-around">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
    <div className="jumbotron mb-0 d-flex flex-column align-items-center">
      <h1 className="display-1 text-center text-white">
        Full Stack Software Engineer
      </h1>
    </div>
  </Fragment>
)
