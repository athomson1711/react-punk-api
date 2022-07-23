import React from 'react'
import styles from './CardArea.module.scss'
import CardList from '../CardList/CardList'
import NotFound from '../NotFound/NotFound'

const CardArea = (props) => {
const { beers, lowPH} = props;

const contentJsx = beers.length ? (
    <CardList beers={beers} lowPH={lowPH}/>
  ) : (
    <NotFound />
  );

  return <section className={styles.cardArea}>{contentJsx}</section>
}

export default CardArea;