import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './Header.module.css'

import Container from '../Container'

const activeLinkStyle = {
  backgroundColor: '#3d57c5',
  borderRadius: 6,
  color: '#eee',
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
        <h3 className={styles.title}>
          {title.split(' ')[0]}
          <span className={styles.hideMobile}> {title.split(' ')[1]}</span>
        </h3>
      </Link>

      <ul className={styles.linkList}>
        <LinkListItem to="/about">
          <span className={styles.linkContent}>About</span>
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
