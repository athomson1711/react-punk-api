import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from '../SearchBar'

const NavBar = () => {
  return (
    <>
    <div className={styles.NavBar}>
    <SearchBar />
    </div>

    
    </>  
  )
}

export default NavBar