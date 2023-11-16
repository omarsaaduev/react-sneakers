import React from 'react'
import Card from '../components/Card/Card';


export default function Home({items, cartItems, searchValue,setSearchValue, onAddToFavorite, onAddToCart}) {
  return (
    <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1 className="">
        {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
      </h1>
      <div className="search-block">
        <img src="/img/search.svg" alt="" />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className="clear "
            src="/img/btn-remove.svg"
            alt=""
          />
        )}
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Поиск..."
          value={searchValue}
        />
      </div>
    </div>
    <div className="d-flex flex-wrap">
      {items
        .filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((item, index) => {
          return (
            <Card
              key={index}
              onPlus={onAddToCart}
              onFavorite = {onAddToFavorite}
              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
              {...item}
            />
          );
        })}
    </div>
  </div>
  )
}
