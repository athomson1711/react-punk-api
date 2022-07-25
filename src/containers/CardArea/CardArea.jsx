import React from 'react'
import styles from './CardArea.module.scss'
import CardList from '../../components/CardList'
import NotFound from '../../components/NotFound'

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