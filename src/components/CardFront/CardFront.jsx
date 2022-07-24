import React from 'react'
import styles from './CardFront.module.scss'

const CardFront = (props) => {

    const { name, abv, image_url, ph, first_brewed } = props.beer;
    return (
        <div className={styles.cardFront}>
            <img className={styles.img} alt={name} src={image_url}></img>
            <section className={styles.beerInfo}>
                <h1>{name}</h1>
                <div className={styles.beerStats}>
                    <p className={styles.borderbox}>ABV: {abv}%</p>
                    <p className={styles.borderbox}>PH: {ph}</p>
                </div>
                <p>First brewed: {first_brewed}</p>
            </section>
        </div>
    )
}

export default CardFront