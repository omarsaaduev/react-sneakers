import React from "react";
import CardItem from "../CardItem.jsx/CardItem";

export default function Drawer({onClose, onRemoveToCart, cartItems = [] }) {
  return (
    <div  className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between ">
          Корзина
          <img onClick={onClose} className="removeBtn " src="/img/btn-remove.svg" alt="" />
        </h2>
        
        {cartItems.length > 0 ? <div className="items flex">
          {cartItems.map((obj) => {
            return <CardItem obj={obj} onRemoveToCart={onRemoveToCart} />
          })}
        </div> 
        :  <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt=""/>
        <h2>Корзина пустая</h2>
        <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <button className="greenButton">
          <img src="/img/arrow.svg" alt=""/>Вернуться назад
        </button>
      </div>}
        

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
