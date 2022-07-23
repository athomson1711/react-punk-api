import React from 'react'
import styles from './Filters.module.scss'

const Filter = () => {
  return (
    <section className={styles.filters}> 
        <label for="highABV">{`High ABV(> 6%)`}</label>
        <input type="checkbox" id="highABV" name="highABV"></input>
        <label for="classicRange">{`Classic Range`}</label>
        <input type="checkbox" id="classicRange" name="classicRange"></input>
        <label for="acidicPH">{`Acidic ph (<4)`}</label>
        <input type="checkbox" id="acidicPH" name="acidicPH"></input>
    </section>
  )
}

export default Filter