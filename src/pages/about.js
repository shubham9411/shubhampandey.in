import React from 'react'
import { Link } from 'gatsby'

import styles from './about.module.css'

import Layout from '../layout'

const About = () => (
  <Layout>
    <section className={styles.container}>
      <header className={styles.centerBlock}>
        <h1>About me</h1>
      </header>
      <div>
        <h1 className={styles.title}>Hi, I'm Shubham Pandey</h1>
        <p className={styles.subtitle}>
          A Software Engineer. I write code, blog posts, and musings.
        </p>
        <p>
          This is my corner of the web where I share things I learn. As a
          developer I write code in Ruby on Rails and React.
        </p>
      </div>
    </section>
    <br />
    <section className={styles.container}>
      <h2 className={styles.bottombar}>Open Source</h2>
      <ul>
        <li>
          <a
            href="https://gitlab.com/gitlab-com/marketing/community-relations/contributor-program/hackathon/-/issues/33"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Gitlab Hackathon Q1'2020 - 7th Position with 4 MR merged
          </a>
        </li>
        <li>
          <a
            href="https://github.com/reactstrap/reactstrap/pulls?q=author%3Ashubham9411"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Reactstrap
          </a>
        </li>
        <li>
          <a
            href="https://wordpress.org/themes/kafal/"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Kafal - A WordPress Theme
          </a>
        </li>
        <li>
          <a
            href="https://github.com/thomaspark/flexboxfroggy/pulls?q=author%3Ashubham9411"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            FlexBox Froggy - Hindi Translation
          </a>
        </li>
      </ul>
    </section>
    <br />
    <section className={styles.container}>
      <h2 className={styles.bottombar}>Games</h2>
      <p>Games I made in college. They are hosted in github.</p>
      <ul>
        <li>
          <a
            href="http://tictactoe.shubhampandey.in/"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Tic Tac Toe
          </a>
        </li>
        <li>
          <a
            href="https://phasor.shubhampandey.in/"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Phasor game
          </a>
        </li>
      </ul>
    </section>
    <br />
    <section className={styles.container}>
      <h2 className={styles.bottombar}>Miscellaneous</h2>
      <ul>
        <li>
          <Link to="/learn" className={styles.links}>
            Learn In Public
          </Link>
        </li>
        <li>
          <Link to="/life-checklist" className={styles.links}>
            Life checklist
          </Link>
        </li>
        <li>
          <Link to="/resume" className={styles.links}>
            Resume
          </Link>
        </li>
        <li>
          <a
            href="https://archive.shubhampandey.in/sketches/"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Sketches
          </a>
        </li>
        <li>
          <a
            href="http://dailycommit.dev/"
            className={styles.links}
            target="_blank"
            rel="noreferrer"
          >
            Dailycommit.dev
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default About
