import React from 'react'
import styles from './CardArea.module.scss'
import Card from '../Card/Card'

const CardArea = (props) => {
const {beers} = props

// const contentJsx = beers.length ? (
//     <Card beers={beers}/>
// ) : (
//     <p>EMPTY</p>
// )

  return (
    <div className={styles.cardArea}>
        {/* {contentJsx} */}
    </div>
  )
}

export default CardArea