import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

// import getBeers from "./services/beer.service";

const App = () => {

  const API_URL = "https://api.punkapi.com/v2/beers"

  // const getBeers = (searchTerm) => {
  //     return fetch(`${API_URL}?beer_name=${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((jsonResponse) =>{
  //         return jsonResponse.beers.map((beer) => mapBeers(beer));
  //     })
  // }


  const getBeers = () => {
      return fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((jsonResponse) =>{
          return (jsonResponse);
      })
  }
  
  console.log(getBeers())

  return (
    <>
    <main className={styles.main}>
    <NavBar />
    <CardArea beers={getBeers}/>

    
    </main>
    </>      
  );
}

export default App;
