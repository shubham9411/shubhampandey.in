import React from 'react'
import styles from './Footer.module.css'

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
            GitHub
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://twitter.com/shubham9411"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Twitter
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://www.linkedin.com/in/shubham9411/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
