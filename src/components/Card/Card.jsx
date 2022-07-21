import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {
const {name, tagline, abv, description } = props.beer;


  return (
    <div className={styles.card}>
        <img className={styles.img} alt={name}></img>
        <section>
            <h1>{name}</h1>
            <h4>{tagline}</h4>
            <p>ABV: {abv}%</p>
            <p>{description}</p>
        </section>
    </div>
  )
}

export default Card