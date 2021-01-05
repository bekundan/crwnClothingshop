import React from "react";
import "./checkout-item.style.scss";

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="items" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">
      <p> &#10005;</p>
    </div>
  </div>
);

export default CheckOutItem;
