import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

const App = () => {

const [beers, setBeers] = useState([])
const [beerName, setBeerName] = useState("");
const [highABV, setHighABV] = useState(false);
const [isClassic, setIsClassic] = useState(false);
const [lowPH, setIsLowPH] = useState("");

const getBeerData = () => {

  const searchBeerName = beerName && `beer_name=${beerName}`;

  const filterHighABV = highABV  ? `&abv_gt=6.0`: "";

  const filterIsClassic = isClassic ? `&brewed_before=01-2011` : "";

  // const filterLowAcidPH = 
  // const API_URL = `https://api.punkapi.com/v2/beers?${searchBeerName}&page=1&per_page=25`
  const API_URL = `https://api.punkapi.com/v2/beers?${searchBeerName}${filterHighABV}${filterIsClassic}`

  fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setBeers(jsonResponse)
  })
}

useEffect(() => {
  getBeerData()
}, [beerName,highABV, isClassic])

return (
    <>
    <main className={styles.main}>
    <NavBar getBeerData={getBeerData} setBeerName={setBeerName} setHighABV={setHighABV} highABV={highABV} setIsClassic={setIsClassic} isClassic={isClassic}/>
    <CardArea beers={beers} />
    </main>
    </>      
  );
}

export default App;
