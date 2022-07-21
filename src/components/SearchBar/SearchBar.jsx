import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.search}>
        <input type="text" placeholder='Search...' />
    </div>
  )
}

export default SearchBar