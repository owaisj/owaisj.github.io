import React from 'react'
import Layout from '../layout'
import '../styles/index.scss'

export default () => (
  <Layout title="About Me">
    <div className="p-3">
      <p>
        My name is Owais Jamil and I'm a full-stack Software Engineer from
        Austin, TX.
      </p>
      <p>
        I have two Bachelor's in Microbiology and Biochemistry from the
        University of Texas at Austin. Although I enjoyed my studies in
        infectious disease and scientific research, I felt that I needed a way
        to use my problem solving skills. And so following my graduation I
        decided to pursue a career in Software Development.
      </p>
      <p>
        To learn how to be a programmer I attended an intensive web development
        bootcamp at the University of Texas to learn technologies focusing on
        modern JavaScript like Node.js and ReactJs. While studying these
        technologies I used my knowledge of programming fundamentals to learn
        other languages and technologies. Using my React knowledge, I have begun
        to learn mobile app development. I primarily focused on learning Python3
        and Java as well as web development frameworks like Flask, Django, and
        Spring.{' '}
      </p>
    </div>
    <h1 className="display-4 border-bottom border-dark">Skills</h1>
    <div
      id="skill-box"
      className="row d-flex flex-row flex-wrap justify-content-around"
    >
      {[
        { name: 'JavaScript', item: 'fa-js' },
        { name: 'Node.Js', item: 'fa-node' },
        { name: 'Python', item: 'fa-python' },
        { name: 'Java', item: 'fa-java' },
        { name: 'ReactJS', item: 'fa-react' },
        { name: 'VueJS', item: 'fa-vuejs' },
        { name: 'Linux/Bash', item: 'fa-linux' },
      ].map(({ item, name }, idx) => (
        <div className="col-4 col-md-3 d-flex flex-column align-items-center m-1">
          <i key={idx} className={`fab ${item}`}></i>
          <span>{name}</span>
        </div>
      ))}
      {[
        { name: 'SQL & NoSQL', item: 'fa-database' },
        { name: 'Android/iOS Development', item: 'fa-mobile-alt' },
        { name: 'REST APIs', item: 'fa-server' },
      ].map(({ name, item }, idx) => (
        <div className="col-4 col-md-3 d-flex flex-column align-items-center m-1">
          <i key={idx} className={`fas ${item}`}></i>
          <span>{name}</span>
        </div>
      ))}
    </div>
  </Layout>
)
