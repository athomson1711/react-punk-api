import React from 'react'
import Card from '../Card/Card'
import styles from './CardList.module.scss'

const CardList = (props) => {
const { beers } = props

  const getBeerCardsJsx = (beer) => {
    <div className={styles.card} key={beer.id}>
        <Card beer={beer} />
    </div>
}

  return <section className={styles.cards}>{beers.map(getBeerCardsJsx)}</section>
}

export default CardList