import React, { useState } from "react";
import styles from './Card.module.scss'

export default function Card({title, price, imageUrl, onPlus}) {
  const [isAdded, setIsAdded] = useState(false)

  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        
        <img className={styles.plus} onClick={onClickPlus} src={`/img/${isAdded? 'btn-cheked': 'btn-plus' }.svg`} alt="" />
        
      </div>
    </div>
  );
}
