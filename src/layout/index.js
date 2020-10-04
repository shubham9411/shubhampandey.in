import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import './index.css'

import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Container from '../components/Container'

const IndexLayout = ({ children }) => {
  const changePreload = event => {
    event.target.onload = null
    event.target.rel = 'stylesheet'
  }

  return (
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
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            as="style"
            onLoad={changePreload}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript>
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
}
IndexLayout.propTypes = {
  children: PropTypes.node,
}

export default IndexLayout
