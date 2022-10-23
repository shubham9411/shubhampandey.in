import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import * as styles from './index.module.css'

export default function AboutMe() {
  useEffect(() => {
    const images = document.querySelectorAll('img')
    setTimeout(() => {
      ;[].slice.call(images).forEach(img => {
        if (img.naturalWidth == 0 && img.naturalHeight == 0) {
          const pngImage = img.src
          const pngUrl = pngImage.replace('webp', 'png')
          img.src = pngUrl
        }
      })
    }, 1000)
  })

  return (
    <div>
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
            When I'm not coding, you'll find me reading a{' '}
            <a
              href="#"
              className={styles.links}
              title="currently reading Psychology of money and Ikigai"
            >
              book
            </a>
            , doing some{' '}
            <Link to="/sketches/" className={styles.links}>
              sketching
            </Link>{' '}
            or painting.
          </p>

          <p>
            You can read my <Link to="/blog">blog</Link> and see some older{' '}
            <Link to="/sketches/" className={styles.links}>
              sketching
            </Link>
            .
          </p>
        </div>
        <div className={styles.headshotContainer}>
          <img
            src="/shubham9411.webp"
            className={styles.headshot}
            alt="Photo of Shubham Pandey"
          />
        </div>
      </div>
    </div>
  )
}
