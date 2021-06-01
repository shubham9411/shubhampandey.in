import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './blogPost.module.css'

import Layout from '../layout'
import SEO from '../components/SEO'

const BlogTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const date = markdownRemark.frontmatter.date
  const html = markdownRemark.html

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
    }, 3000)
  })

  return (
    <Layout>
      <SEO
        postPath={markdownRemark.frontmatter?.path}
        postNode={markdownRemark}
        postSEO
      />
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>
          <i>{date}</i>
        </p>
        <div
          className={styles.blogpost}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="">
          Thanks for reading if you have any comments or feedback you can reach
          out to me on{' '}
          <a
            href="https://twitter.com/shubham9411"
            target="_blank"
            rel="noreferrer noopener"
          >
            twitter
          </a>
          .
        </div>
        <h2>Up Next</h2>
        <div className={styles.linkContainer}>
          <p className={styles.linkpTag}>
            {prev && (
              <Link to={prev.frontmatter.path} className={styles.link}>
                <span role="img" aria-label="left arrow">
                  ⬅️ {prev.frontmatter.title}
                </span>
              </Link>
            )}
          </p>
          <p className={styles.linkpTag}>
            {next && (
              <Link to={next.frontmatter.path} className={styles.link}>
                <span role="img" aria-label="right arrow">
                  {next.frontmatter.title} ➡️
                </span>
              </Link>
            )}
          </p>
        </div>
      </div>
    </Layout>
  )
}

const pageContextProps = PropTypes.shape({
  frontmatter: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
})

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    next: pageContextProps,
    prev: pageContextProps,
  }),
}

export default BlogTemplate

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        thumbnail
      }
    }
  }
`
