import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {
  const { name, tagline, abv, description, image_url, ph, first_brewed } = props.beer;


  return (
    <div className={styles.card}>
      <img className={styles.img} alt={name} src={image_url}></img>
      <section className={styles.beerInfo}>
        <h1>{name}</h1>
        {/* <h4>{tagline}</h4> */}
        <div>
          <p>ABV: {abv}%</p>
          <p>PH: {ph}</p>
        </div>
        <p>First brewed: {first_brewed}</p>
        {/* <div className={styles.descriptionContainer}>
              <p className={styles.description}>{description}</p>
            </div> */}
      </section>
    </div>
  )
};

export default Card