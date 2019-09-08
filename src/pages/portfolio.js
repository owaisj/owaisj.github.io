import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../layout'

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'

const ProjectCard = ({ name, vc, demo, desc, imageURL }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-3">
    <div className="card m-1">
      <h6 className="card-header">{name}</h6>
      <img className="card-img-top" src={imageURL} alt="placeholder" />
      <div className="card-body">
        <p className="card-text small">{desc}</p>
        <a href={demo} className="card-link btn btn-outline-primary btn-sm">
          View App
        </a>
        <a href={vc} className="card-link btn btn-outline-dark btn-sm">
          View Code
        </a>
      </div>
    </div>
  </div>
)

export default () => {
  const imageArray = [img1, img2, img3, img4, img5, img6, img7]

  return (
    <Layout title="Projects">
      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            allProjectsJson {
              edges {
                node {
                  name
                  vc
                  demo
                  desc
                }
              }
            }
          }
        `}
        render={data => {
          const values = data.allProjectsJson.edges
          return (
            <div className="row d-flex flex-wrap justify-content-center p-3">
              {values.map(({ node }, index) => (
                <ProjectCard
                  key={index}
                  {...node}
                  imageURL={imageArray[index]}
                />
              ))}
            </div>
          )
        }}
      />
    </Layout>
  )
}
