import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

import Layout from '../layout'

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>Hi, I'm Shubham Pandey</h1>
        <p className={styles.subtitle}>
          I'm a currently working as a Full stack developer at eLitmus. I am an
          observer of new cults of tech twitter and follow whats happening on
          the tech space.
        </p>

        <p>
          This is a place where I dump all info of my learnings and events of my
          life.
        </p>

        <p>
          When I'm not coding, you'll find me playing COC(mobile game), doing
          some{' '}
          <a
            href="https://archive.shubhampandey.in/sketches/"
            rel="noreferrer noopener"
            target="_blank"
          >
            sketching
          </a>{' '}
          or painting.
        </p>

        <p>
          You can read my <Link to="/blog">blog</Link>, or for older blogs visit{' '}
          <a
            href="https://archive.shubhampandey.in/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Archive
          </a>
          .
        </p>
      </div>
      <div className={styles.headshotContainer}>
        <img
          src="shubham9411.png"
          className={styles.headshot}
          alt="Photo of Shubham Pandey"
        />
      </div>
    </div>
  </Layout>
)

export default Home
