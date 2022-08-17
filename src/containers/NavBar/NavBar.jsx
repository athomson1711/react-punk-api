import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from '../../components/SearchBar'
import Filter from '../../components/Filters'
import logo from '../../assets/brewdogLogo.png'
import {
  Link
} from 'react-router-dom';
import SignOut from '../../components/SignOut'


const NavBar = (props) => {

  const { getBeerData, setBeerName, setHighABV, highABV, setIsClassic, isClassic, lowPH, setIsLowPH, data } = props;

  return (
    <>
      <div className={styles.NavBar}>
        <p>{data.user}</p>
        <img alt="Brewdog Logo" src={logo}></img>
        <SearchBar getBeerData={getBeerData} setBeerName={setBeerName} />
        <Filter getBeerData={getBeerData} setHighABV={setHighABV} highABV={highABV} setIsClassic={setIsClassic} isClassic={isClassic} lowPH={lowPH} setIsLowPH={setIsLowPH}/>
          
        <Link to='/'>Home</Link>
        <nav>
          { !data.user ? 
          (<Link to='login'>Login</Link>) : (<SignOut />) }
          </nav>
      </div>
    </>
  )
}

export default NavBar