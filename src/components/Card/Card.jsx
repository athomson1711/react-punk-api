import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {
const {beers}=props;


  return (
    <div className={styles.card}>
        <img className={styles.img}></img>
        <section>
            <h1>Beer Name</h1>
            <p>Beer info...</p>
        </section>
    </div>
  )
}

export default Card