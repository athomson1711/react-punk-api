import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

const App = () => {
const {beers, setBeers} = useState([])


const getBeerData = () => {
  const API_URL = "https://api.punkapi.com/v2/beers"

  fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      console.log(jsonResponse)
      setBeers(jsonResponse)
  })
}

getBeerData()

return (
    <>
    <main className={styles.main}>
    <NavBar />
    <CardArea beers={beers}/>
    </main>
    </>      
  );
}

export default App;
