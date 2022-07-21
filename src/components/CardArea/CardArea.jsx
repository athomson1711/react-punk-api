import React from 'react'
import styles from './CardArea.module.scss'
import CardList from '../CardList/CardList'
import NotFound from '../NotFound/NotFound'

const CardArea = (props) => {
const { beers } = props;

const contentJsx = beers.length ? (
    <CardList beers={beers} />
  ) : (
    <NotFound />
  );

  return <section className={styles.cardArea}>{contentJsx}</section>
}

export default CardArea;