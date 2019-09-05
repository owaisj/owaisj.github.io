import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default ({ children, title }) => (
  <div id="root-container" className="d-flex flex-column">
    <Header />
    <div id="content-wrapper" className="flex-fill container-fluid bg-light">
      <div
        style={{
          minHeight: '500px',
        }}
        className="row d-flex justify-content-center m-3"
      >
        <div id="content" class="col col-md-10 col-sm">
          <h1 className="border-bottom border-dark display-4">{title}</h1>
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
