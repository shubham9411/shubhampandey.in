import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './Header.module.css'

import Container from '../Container'

const activeLinkStyle = {
  backgroundColor: 'whitesmoke',
  borderRadius: 6,
  color: '#222',
  padding: '0.7rem 1rem',
}

const LinkListItem = ({ to, children }) => (
  <li className={styles.ListLink}>
    <Link to={to} activeStyle={activeLinkStyle} className={styles.Link}>
      {children}
    </Link>
  </li>
)

LinkListItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

const Header = ({ title }) => (
  <header className={styles.Header}>
    <Container>
      <Link to="/">
        <h3 className={styles.title}>{title}</h3>
      </Link>

      <ul className={styles.linkList}>
        {/* <LinkListItem to="/projects">
          <span className={styles.linkContent}>Projects</span>
        </LinkListItem> */}
        <LinkListItem to="/resume">
          <span className={styles.linkContent}>Resume</span>
        </LinkListItem>
        <LinkListItem to="/blog">
          <span className={styles.linkContent}>Blog</span>
        </LinkListItem>
      </ul>
    </Container>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
