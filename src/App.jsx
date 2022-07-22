import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

const App = () => {

const [beers, setBeers] = useState([])
const [beerName, setBeerName] = useState("");


const getBeerData = () => {

  const searchBeerName = beerName && `?beer_name=${beerName}`;

  // const API_URL = `https://api.punkapi.com/v2/beers?${searchBeerName}&page=1&per_page=25`
  const API_URL = `https://api.punkapi.com/v2/beers${searchBeerName}`

  fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setBeers(jsonResponse)
  })
}

useEffect(() => {
  getBeerData()
}, [beerName])

return (
    <>
    <main className={styles.main}>
    <NavBar getBeerData={getBeerData} setBeerName={setBeerName}/>
    <CardArea beers={beers}/>
    </main>
    </>      
  );
}

export default App;
