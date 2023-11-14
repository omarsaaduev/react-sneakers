import React from "react";

export default function CardItem({obj, onRemoveToCart}) {
    const {title, imageUrl, price } = obj
  return (
    <div className="carItem d-flex align-center ">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="carItemImg"
      ></div>
      <div className="mr-20 flex ">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img onClick={() => onRemoveToCart(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="" />
    </div>
  );
}
