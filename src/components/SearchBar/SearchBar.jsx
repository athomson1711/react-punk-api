import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = (props) => {
    const { updateSearchText } = props

  return (
    <div className={styles.search}>
        <input type="text" placeholder='Search...' onInput={e => updateSearchText(e.target.value)}/>
    </div>
  )
}

export default SearchBar