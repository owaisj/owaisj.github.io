import React from 'react'
import Layout from '../layout'

const ProjectCard = () => (
  <div className="card m-1">
    <h6 className="card-header">Project Name</h6>
    <div className="card-body">
      <h6 className="card-title">???</h6>
      <h6 className="card-subtitle">Tagline</h6>
      <p className="card-text">Description</p>
      <a href="#" className="card-link">
        View App
      </a>
      <a href="#" className="card-link">
        View Code
      </a>
    </div>
  </div>
)

const Pagination = () => (
  <ul className="pagination">
    {['Client-Side', 'Back-End', 'Full-Stack', 'Mobile'].map((item, idx) => (
      <li className="page-item" key={idx}>
        <a href="#" className="page-link">
          {item}
        </a>
      </li>
    ))}
  </ul>
)

export default () => (
  <Layout title="Projects">
    <p>View My Projects</p>
    <Pagination />
    <div className="d-flex flex-row justify-content-center flex-wrap p-3">
      {[1, 1, 1, 1, 1, 1].map((item, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  </Layout>
)
