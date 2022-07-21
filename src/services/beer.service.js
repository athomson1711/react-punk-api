const API_URL = "https://api.punkapi.com/v2/beers"

const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?beer_name=${searchTerm}`)
    .then((res) => res.json())
    .then((jsonResponse) =>{
        return jsonResponse.beers.map((beer) => mapBeers(beer));
    })
}

const mapBeers = (beer) => {
let beers = [];
Object.keys(beer).forEach((key) => {
    if (key.includes("name") && beer[key]) {
        beers.push(beer[key]);
    }
})

return {...beer, beers: beers};

}

export default getBeers;