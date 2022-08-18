import React, { useState } from 'react'
import styles from './CardBack.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardBack = (props) => {
    const { name, tagline, description } = props.beer;
    const {toggleFav} = props;
    // const [favState, setFavState] = useState(isFav);
    // const heartIcon = favState ? ["fas", "heart"] : ["far", "heart"];

    return (
        <div className={styles.cardBack}>
              {/* <FontAwesomeIcon icon={heartIcon} /> */}
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