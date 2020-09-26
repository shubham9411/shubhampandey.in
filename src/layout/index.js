import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import 'typeface-roboto'
import './index.css'

import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Container from '../components/Container'

const IndexLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query RootLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <Header title={data.site.siteMetadata.title} />
        <Container>
          <div className="container">{children}</div>
          <Footer />
        </Container>
      </>
    )}
  />
)

IndexLayout.propTypes = {
  children: PropTypes.node,
}

export default IndexLayout
