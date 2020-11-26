import React, { useState, useEffect } from "react";
import "./cart.styles.scss";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./../../../Redux/userSlice";

// Firebase
import { getUserdataOnSnapashotDB } from "./../../../Firebase/db";

// Components
import CartItem from "./../../Templates/Cart-item/CartItem.component";
import { StyledButton } from "./../../Templates/Buttons_Styled/botton.styled";

// Data
import products from "./../../../Resources/data";

function CartPage() {
  const [productsInCart, setProductsInCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const userState = useSelector(selectUser);
  let email = "";

  useEffect(() => {
    if (userState.authenticated) {
      const user = JSON.parse(userState.user);
      email = user.email;
      if (email !== "" && userState.authenticated)
        if (productsInCart === null)
          getUserdataOnSnapashotDB(email, (res) => {
            filterItems(res.products.cart);
          });
    }
  });

  // setProducts(Object.entries(res.products.cart));
  function filterItems(res) {
    const cartKeysArr = Object.keys(res); // names of stored products in Cart in Database
    const cartValuesArr = Object.values(res); // quantity of stored products in Cart in Database
    let ArrayOfOb = Object.entries(products.products); // All products which are rendered or in the Data

    let filteredProductsObj = [];
    let totalPrice = 0;

    cartKeysArr.forEach(function (name, index) {
      ArrayOfOb.forEach(function (un) {
        // un = ["hats", Array(9)]
        un[1].forEach(function (item) {
          // item  = {id: "hat1", name: "Puma Hat", price: "$19", img: "https://i.ibb.co/4W6Xdqs/4-min.jpg"}
          if (item.name === name) {
            item["quantity"] = cartValuesArr[index]; // Storing quantity in item object
            let onlyPrice = item.price.slice(1); // $15 -> 15
            totalPrice += Number(onlyPrice) * item.quantity;
            filteredProductsObj.push(item);
          }
        });
      });
    });
    setTotalPrice(totalPrice);
    // Array of objects, where object is product data like item  = {id: "hat1", name: "Puma Hat", price: "$19", img: "https://i.ibb.co/4W6Xdqs/4-min.jpg"}
    const sortedProducts = filteredProductsObj.sort(sortByNames);
    setProductsInCart(sortedProducts);
  }

  function sortByNames(a, b) {
    // a should come before b in the sorted order
    if (a.name < b.name) {
      return -1;
      // a should come after b in the sorted order
    } else if (a.name > b.name) {
      return 1;
      // and and b are the same
    } else {
      return 0;
    }
  }

    return (
    <div className="container cart-items mx-3 mb-5">
      <div className="cart-header">
        <span className="product-img">Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {productsInCart
        ? productsInCart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        : null}
      <div className="d-flex">
        <StyledButton primary className="mt-2 mb-1">
          Pay Now {totalPrice ? `:  $${totalPrice}` : null}
        </StyledButton>
      </div>
    </div>
  );
}

export default CartPage;
