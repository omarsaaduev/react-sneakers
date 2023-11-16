import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="./img/logo.png" alt="" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      </Link>
      
      <ul className="headerRight d-flex  ">
        <li onClick={props.onClickCart} className="mr-30 cu-p ">
          <img width={18} height={18} src="./img/cart.svg" alt="Корзина" />
          <span>1205р</span>
        </li>
        <Link to="/favorite">
        <li className="mr-20 cu-p">
          <img width={20} height={20} src="/img/heart.svg" alt="Закладки"/>
        </li>
        </Link>
        
        <li>
          <img width={18} height={18} src="./img/user.svg" alt="Пользователи" />
        </li>
      </ul>
    </header>
  );
}
