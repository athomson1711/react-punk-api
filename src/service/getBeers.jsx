import React, {useState, useEffect}from 'react'

const getBeers = () => {

    const [user, setUser] = useState("");
    const [beers, setBeers] = useState([])
    const [beerName, setBeerName] = useState("");
    const [highABV, setHighABV] = useState(false);
    const [isClassic, setIsClassic] = useState(false);
    const [lowPH, setIsLowPH] = useState(false);

    const getBeerData = (beerName, isClassic, highABV) => {
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
    <div>getBeers</div>
  )
}

export default getBeers