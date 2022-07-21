import styles from "./App.module.scss";
import { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

const App = () => {
const [beers, setBeers] = useState([])


// const getBeerData = () => {
//   const API_URL = "https://api.punkapi.com/v2/beers"

//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((jsonResponse) => {
//       setBeers(jsonResponse)
//   })
// }

// getBeerData()

const beerData = [ 
  {
  name: "Beer 1",
  tagline: "Beer 1 is good",
  abv: 1,
  description: "Beer 1 is a good beer says person 1"
  },
  
  {
  name: "Beer 2",
  tagline: "Beer 2 is good",
  abv: 2,
  description: "Beer 2 is a good beer says person 2"
  },
  
  {
  name: "Beer 3",
  tagline: "Beer 3 is good",
  abv: 3,
  description: "Beer 3 is a good beer says person 3"
  },
  
  ]


useEffect(() => {
  setBeers(beerData)
}, [])


// setBeers(beerData)


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
