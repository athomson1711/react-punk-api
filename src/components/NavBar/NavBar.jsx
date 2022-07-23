import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from '../SearchBar'
import Filter from '../Filters'

const NavBar = (props) => {

  const { getBeerData, setBeerName, setHighABV, highABV, setIsClassic, isClassic, lowPH, setIsLowPH } = props;

  return (
    <>
      <div className={styles.NavBar}>
        <h1>PUNK API</h1>
        <SearchBar getBeerData={getBeerData} setBeerName={setBeerName} />
        <Filter getBeerData={getBeerData} setHighABV={setHighABV} highABV={highABV} setIsClassic={setIsClassic} isClassic={isClassic} lowPH={lowPH} setIsLowPH={setIsLowPH}/>
      </div>
    </>
  )
}

export default NavBar