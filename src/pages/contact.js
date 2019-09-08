import React from 'react'
import Layout from '../layout'

export default () => (
  <Layout title="Contact Me">
    <p className="lead">
      <strong>
        Send me an email at{' '}
        <a href="mailto:jamil.owais@gmail.com">jamil.owais@gmail.com</a>
      </strong>
    </p>
    <p className="lead">
      {' '}
      <strong>
        Give me a call at <a href="tel:+1-512-919-9153">512-919-9153</a>
      </strong>
    </p>
  </Layout>
)
