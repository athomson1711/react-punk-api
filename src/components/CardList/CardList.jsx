import React from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.scss'

const CardList = (props) => {
  const { beers, lowPH} = props;



  const getBeerCardsJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} toggleFav={props.toggleFav} />
    </div>
  )
  
  // if lowPH true then filter and map the beers with condition, else render all the cards

  // return <div className={styles.cards}> {beers.map(getBeerCardsJsx)} </div>
  return lowPH ? <div className={styles.cards}> {beers.filter(beer => beer.ph < 4 ).map(getBeerCardsJsx)} </div> :  <div className={styles.cards}> {beers.map(getBeerCardsJsx)} </div>
}

export default CardList