import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
      <div className={styles.notfound}>
        <h2>No result...</h2>
        <p>Sorry, we couldn't find a beer to match that search, try again.</p>
      </div>
  )
}

export default NotFound