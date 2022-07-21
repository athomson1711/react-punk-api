import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from '../SearchBar'

const NavBar = (props) => {

  const {updateSearchText} = props;

  return (
    <>
    <div className={styles.NavBar}>
    <SearchBar updateSearchText={updateSearchText}/>
    </div>

    
    </>  
  )
}

export default NavBar