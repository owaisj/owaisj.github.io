import React, { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <div id="root-container" className="d-flex flex-column">
    <Header />
    <div className="flex-fill">{children}</div>
    <Footer />
  </div>
)
