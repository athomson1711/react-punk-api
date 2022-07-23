import React from 'react'
import styles from './Filters.module.scss'

const Filter = (props) => {

  const {getBeerData, setHighABV, highABV, setIsClassic, isClassic, lowPH, setIsLowPH } = props;

  
  return (
    <section className={styles.filters}> 
        <label for="highABV">{`High ABV(> 6%)`}</label>
        <input type="checkbox" id="highABV" name="highABV" onClick={e => {
          setHighABV(!highABV)
          getBeerData()
        }}></input>
        <label for="classicRange">{`Classic Range`}</label>
        <input type="checkbox" id="classicRange" name="classicRange" onClick={e => {
          setIsClassic(!isClassic)
          getBeerData()
        }} ></input>
        <label for="acidicPH">{`Acidic ph (<4)`}</label>
        <input type="checkbox" id="acidicPH" name="acidicPH" onClick={e => {
          setIsLowPH(!lowPH)
          getBeerData()
        }} ></input>
    </section>

  )
}

export default Filter