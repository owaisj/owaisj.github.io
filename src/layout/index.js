import React, { useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'

export default ({ children, title }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    document.title = 'Owais Jamil'
    const notHome = title !== 'About Me'
    if (headerRef.current && notHome) {
      headerRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [])

  return (
    <div id="root-container" className="d-flex flex-column">
      <Header />
      <div id="content-wrapper" className="flex-fill container-fluid bg-light">
        <div
          style={{
            minHeight: '500px',
          }}
          className="row d-flex justify-content-center m-3"
        >
          <div id="content" className="col col-md-10 col-sm">
            <h1 ref={headerRef} className="border-bottom border-dark display-4">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
