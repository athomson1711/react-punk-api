import React from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.scss'

const CardList = (props) => {
  const { beers, lowPH} = props;

  const getBeerCardsJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  )
  
  // if lowPH true then filter and map the beers with condition, else render all the cards

  // return <section className={styles.cards}> {beers.map(getBeerCardsJsx)} </section>
  return lowPH ? <section className={styles.cards}> {beers.filter(beer => beer.ph < 4 ).map(getBeerCardsJsx)} </section> :  <section className={styles.cards}> {beers.map(getBeerCardsJsx)} </section>
}

export default CardList