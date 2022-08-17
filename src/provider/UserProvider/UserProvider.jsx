import React, { createContext, useState, useEffect } from 'react'
import styles from '../../App.module.scss'
import NavBar from '../../containers/NavBar'
import CardArea from "../../containers/CardArea";
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



export const UserContext = createContext({});

const UserProvider = () => {

  const [user, setUser] = useState("");
  const [beers, setBeers] = useState([])
  const [beerName, setBeerName] = useState("");
  const [highABV, setHighABV] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [lowPH, setIsLowPH] = useState(false);

  const data = {
    user: user,
    setUser: setUser
  }

  const getBeerData = () => {

    const searchBeerName = beerName && `beer_name=${beerName}`;

    const filterHighABV = highABV ? `&abv_gt=6.0` : "";

    const filterIsClassic = isClassic ? `&brewed_before=01-2011` : "";

    const API_URL = `https://api.punkapi.com/v2/beers?${searchBeerName}${filterHighABV}${filterIsClassic}`

    fetch(API_URL)
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse)
      })
  }

  useEffect(() => {
    getBeerData()
  }, [beerName, highABV, isClassic, lowPH])


  return (
    <UserContext.Provider value={data}>

      <Router>
        <>
          <main className={styles.main}>

            <NavBar
              getBeerData={getBeerData} setBeerName={setBeerName}
              setHighABV={setHighABV} highABV={highABV}
              setIsClassic={setIsClassic} isClassic={isClassic}
              lowPH={lowPH} setIsLowPH={setIsLowPH} 
              data={data}/>
 
            <Routes>
              <Route path='/' element={<CardArea beers={beers} lowPH={lowPH} />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='registration' element={<Register />}></Route>
            </Routes>

          </main>
        </>
      </Router>
    </UserContext.Provider>

  )
}

export default UserProvider