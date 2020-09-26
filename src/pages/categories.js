import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import './blog.css'

import Layout from '../layout'

const Categories = ({ data }) => {
  const { allMarkdownRemark } = data
  const { group } = allMarkdownRemark
  return (
    <Layout>
      <h1>Blogs by Category</h1>
      {group.map(cat => (
        <div key={cat.fieldValue}>
          <span>
            <h2 className="categoryName">{cat.fieldValue}</h2>
            {cat.edges.map(({ node: { frontmatter } }) => (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path} className="linkContainer">
                  <div className="blogContainer">
                    <div className="titleTagContainer">
                      <p className="blogTitle">{frontmatter.title}</p>
                      <div className="blogTags">
                        {frontmatter.tags.map(tag => (
                          <p className={`tag tag-${tag}`} key={tag}>
                            {tag}{' '}
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
          </span>
        </div>
      ))}
    </Layout>
  )
}

Categories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string,
                date: PropTypes.string,
                category: PropTypes.string,
              }),
            }),
          })
        ),
      }),
    }),
  }),
}

export default Categories

export const query = graphql`
  query CategoriesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              path
              tags
              date(formatString: "MMMM DD, YYYY")
              category
            }
          }
        }
      }
    }
  }
`
