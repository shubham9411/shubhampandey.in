import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './Footer.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faGithub,
  faLinkedin,
  faDev,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faLinkedin, faDev, faTwitter)

const Footer = () => {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.footerLink}>
          <a
            href="https://github.com/shubham9411"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://twitter.com/shubham9411"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://www.linkedin.com/in/shubham9411/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://dev.to/shubham9411"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FontAwesomeIcon icon={['fab', 'dev']} /> DevTo
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
