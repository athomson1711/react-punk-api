import React from 'react'
import styles from './CardArea.module.scss'
import Card from '../Card/Card'
import NotFound from '../NotFound/NotFound'

const CardArea = (props) => {
const {beers} = props

// const contentJsx = beers.length ? (
//     <Card beers={beers}/>
// ) : (
//     <NotFound />
// )

  return (
    <div className={styles.cardArea}>
        {/* {contentJsx} */}
        <NotFound />
    </div>
  )
}

export default CardArea