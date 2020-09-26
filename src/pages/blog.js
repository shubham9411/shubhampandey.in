import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import './blog.css'

import Layout from '../layout'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const allPosts = edges
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const posts = edges || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join('')
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
    setState({ query, filteredData })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="blogPageContainer">
        <h1 className="header">Blog</h1>
        <p>
          Documenting my journey of making cool thing in the web. For older
          blogs visit{' '}
          <a
            href="https://archive.shubhampandey.in/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Archive
          </a>
          .
        </p>
        <form>
          <input
            className="input"
            onChange={handleInputChange}
            placeholder="Type here to search the blog..."
          />
        </form>

        {posts.map(({ node: { frontmatter } }) => (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path} className="linkContainer">
              <div className="blogContainer">
                <div className="titleTagContainer">
                  <p className="blogTitle">{frontmatter.title}</p>{' '}
                  <div className="blogTags">
                    {frontmatter.tags.map(tag => (
                      <p className={`tag tag-${tag}`} key={tag}>
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="dateContainer">
                  <p className="blogDate">{frontmatter.date}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              path: PropTypes.string,
              tag: PropTypes.string,
              date: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
}

export default Blog

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
