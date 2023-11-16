import React from 'react'
import Card from '../components/Card/Card'


export default function Favorites({favorites, onAddToFavorite}) {
  return (
    <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1 className="">Мои закладки</h1>
      
    </div>
    <div className="d-flex flex-wrap">
            {favorites.map((favorite, index) => {
                return <Card 
                key={index} 
                favorited={true}
                onFavorite={(obj) => onAddToFavorite(obj)}
                {...favorite}
                />
            })}
    </div>
  </div>
  )
}

