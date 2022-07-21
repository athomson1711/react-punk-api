import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

import getBeers from "./services/beer.service";

const App = () => {
const {beers, setBeers} = useState([])
  const API_URL = "https://api.punkapi.com/v2/beers"

const updateBeers = async () =>{
  const apiBeers = await getBeers();
  setBeers(apiBeers)
}

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
