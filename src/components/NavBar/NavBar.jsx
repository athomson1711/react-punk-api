import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from '../SearchBar'

const NavBar = (props) => {

  const {getBeerData, setBeerName} = props;

  return (
    <>
    <div className={styles.NavBar}>
    <h1>PUNK API</h1>
    <SearchBar getBeerData={getBeerData} setBeerName={setBeerName}/>
    </div>

    
    </>  
  )
}

export default NavBar