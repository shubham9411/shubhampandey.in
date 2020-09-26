import React from 'react'
import PropTypes from 'prop-types'

import styles from './LinkButton.module.css'

const Link = ({ size, href, target, className, children }) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' && 'noopener noreferrer'}
    className={`${
      size === 'large' ? styles.LinkButtonLarge : styles.LinkButton
    } ${className ? className : ''}`.trim()}
  >
    {children}
  </a>
)

Link.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

const LinkButton = ({ size, center, href, target, className, children }) => {
  if (center) {
    return (
      <div className={styles.LinkButtonContainer}>
        <Link size={size} href={href} target={target} className={className}>
          {children}
        </Link>
      </div>
    )
  }

  return (
    <Link size={size} href={href} target={target} className={className}>
      {children}
    </Link>
  )
}

LinkButton.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  center: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default LinkButton
