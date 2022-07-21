import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
      <div className={styles.notfound}>
        <h2>Page not found</h2>
        <p>Unfortunately we couldn't find that page</p>
      </div>
  )
}

export default NotFound