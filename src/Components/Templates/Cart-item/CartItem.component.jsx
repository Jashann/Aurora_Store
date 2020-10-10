import React from "react";

import { updateProduct, removeProduct } from "./../../../Firebase/db";

export default function CartItem({ product }) {
  const { name, price, img, quantity } = product;

  const handleClick = (e) => {
    const type = e.target.name;
    const productName = e.target.parentElement.parentElement.parentElement.querySelector(
      ".product-name"
    ).textContent; // productName = Nike Hat
    if (type.includes("add")) updateProduct("add", productName);
    if (type.includes("remove")) updateProduct("remove", productName);
  };

  const handleRemove = (e) => {
    const productName = e.target.parentElement.parentElement.querySelector(
      ".product-name"
    ).textContent;
    removeProduct(productName);
  };

  return (
    <div className="cart-item">
      <span>
        <img src={img} alt="product" />
      </span>
      <span className="product-name">{name}</span>
      <span className="flex-center">
        <span className="icon-span">
          <ion-icon
            onClick={handleClick}
            name="remove-circle-outline"
          ></ion-icon>
        </span>
        <span className="quantity">{quantity}</span>
        <span className="icon-span">
          <ion-icon onClick={handleClick} name="add-circle-outline"></ion-icon>
        </span>
      </span>

      <span>{price}$</span>
      <span>
        <ion-icon onClick={handleRemove} name="close-outline"></ion-icon>
      </span>
    </div>
  );
}
