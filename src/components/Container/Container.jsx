import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './Container.module.css'

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
