import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './index.module.css'

import Layout from '../layout'

const Home = ({ data }) => {
  useEffect(() => {
    // const images = document.querySelectorAll('img')
    // setTimeout(() => {
    //   ;[].slice.call(images).forEach(img => {
    //     if (img.naturalWidth == 0 && img.naturalHeight == 0) {
    //       const pngImage = img.src
    //       const pngUrl = pngImage.replace('webp', 'png')
    //       img.src = pngUrl
    //     }
    //   })
    // }, 1000)
  })

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>Hi, I'm Shubham Pandey</h1>
          <p className={styles.subtitle}>
            A Software Engineer. I write code, blog posts, and musings.
          </p>

          <p>
            This is my corner of the web where I share things I learn. As a
            developer I write code in Ruby on Rails and React.
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
            You can read my <Link to="/blog">blog</Link> and see some older{' '}
            <a
              href="https://archive.shubhampandey.in/sketches/"
              rel="noreferrer noopener"
              target="_blank"
            >
              sketching
            </a>
            .
          </p>
        </div>
        <div className={styles.headshotContainer}>
          <Img
            // src="shubham9411.webp"
            className={styles.headshot}
            fluid={data.headshot.childImageSharp.fluid}
            alt="Photo of Shubham Pandey"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "shubham9411.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
