import React, { useState } from "react";
import styles from './Card.module.scss'

export default function Card({id, title, price, imageUrl, onPlus, onFavorite, favorited=false, added=false }) {
  const [isAdded, setIsAdded] = useState(added)
   const [isFavourite, setIsFavourite] = useState(favorited)

   const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price})
    setIsFavourite(!isFavourite)
   }


  const onClickPlus = () => {
    onPlus({id, title, imageUrl, price})
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={onClickFavorite} src={`/img/${isFavourite? 'liked': 'unliked'}.svg`} alt="" />
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
