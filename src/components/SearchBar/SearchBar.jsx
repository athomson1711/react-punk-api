import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = (props) => {
    const { setBeerName, getBeerData } = props

  return (
    <div className={styles.search}>
        <input type="text" placeholder='Search...' onInput={e => {
          setBeerName(e.target.value);
          getBeerData()
        }}/>
    </div>
  )
}

export default SearchBar