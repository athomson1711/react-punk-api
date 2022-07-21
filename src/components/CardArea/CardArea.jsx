import React from 'react'
import styles from './CardArea.module.scss'
import Card from '../Card/Card'

const CardArea = (props) => {


  return (
    <div className={styles.cardArea}>
        <Card />
    </div>
  )
}

export default CardArea