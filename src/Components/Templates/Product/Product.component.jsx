import React from "react";
import "./Product.styles.scss";

// Firebase
import { addProduct } from "./../../../Firebase/db";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./../../../Redux/userSlice";

// UIHandler
import { MessageHandler } from "./../../../UIHandler/uiHandler";

export default function Product({ img, name, price }) {
  const userState = useSelector(selectUser);
  let email = "";

  if (userState.authenticated) {
    const user = JSON.parse(userState.user);
    email = user.email;
  }

  const handleAdd = (e) => {
    if (userState.authenticated) {
      const product = e.target.parentElement.parentElement;
      const productName = product.querySelector(".product-name").textContent;
      // const productPrice = product.querySelector(".product-price").textContent;
      addProduct(
        email,
        {
          [productName]: 1,
        },
        productName
      );
    } else
      MessageHandler.showMessage(
        "You need to be signed to add product in cart",
        "Sign in"
      );
  };

  return (
    <div className="product">
      <div
        className="product-main"
        style={{
          background: `url(${img}) no-repeat center center/cover`,
        }}
      >
        <button onClick={handleAdd} className="btn-cart">
          Add to Cart <ion-icon name="cart-outline"></ion-icon>{" "}
        </button>
      </div>
      <div className="product-info">
        <span className="product-name">{name}</span> : &nbsp;
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
}
