import React from 'react'
import styles from './Card.module.scss'
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront';
import {useState} from 'react'



const Card = (props) => {
  const { beer, toggleFav } = props;
  const [isFaceDown, setIsFaceDown] = useState(false)

const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <div className={`${styles.beerCard} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
      <div className={styles.front}>
        <CardFront beer={beer}/>
      </div>
      <div className={styles.back}>
        <CardBack beer={beer} toggleFav={toggleFav}/>
      </div>
      
    </div>
  )
};

export default Card