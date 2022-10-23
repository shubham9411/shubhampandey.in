import React from 'react'

import Layout from '../layout'

import * as styles from './resume.module.css'

const Resume = () => (
  <Layout>
    <div className={styles.container}>
      <h1>Resume</h1>

      <section>
        <p>
          <strong>
            <a href="/shubham-resume.pdf" target="_blank" rel="noopener">
              📄 Resume PDF
            </a>
          </strong>
        </p>
        <p>Working as a Software Engineer</p>
        <p>
          <strong>Coding from:</strong> Hyderabad
        </p>
      </section>
      <section>
        <h2>Experience</h2>
        <h3>
          <i>Microsoft IDC</i> at Hyderabad
        </h3>
        <p>Jan 2022 - Present</p>
        <h3>
          <i>mFine - Novocura Tech Health Services</i> at Bangalore
        </h3>
        <p>Mar 2021 - Jan 2022</p>
        <h3>
          <i>eLitmus evaluation pvt ltd</i> at Bangalore
        </h3>
        <p>July 2018 - Jan 2021</p>
      </section>
      <section>
        <h2>Education</h2>
        <h3>Bipin Tripathi Kumaon Institute of Technology, Dwarahat</h3>
        <p>BTech, Computer Science and Eng. 2014 - 2018</p>
      </section>
    </div>
  </Layout>
)

export default Resume
