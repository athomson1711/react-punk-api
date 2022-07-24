import React from 'react'
import styles from './CardBack.module.scss'

const CardBack = (props) => {
    const { name, tagline, description } = props.beer;
    return (
        <div className={styles.cardBack}>
            <section className={styles.beerInfo}>
                <h1>{name}</h1>
                <h4>{tagline}</h4>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{description}</p>
                </div>
            </section>
        </div>
    )
}

export default CardBack