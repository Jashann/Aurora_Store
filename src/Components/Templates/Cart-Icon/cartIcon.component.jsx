import React, { useState } from "react";
import "./cartIcon.styles.scss";

import { useHistory } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./../../../Redux/userSlice";

// Firebase
import { getUserdataOnSnapashotDB } from "./../../../Firebase/db";

const Cart = () => {
  const history = useHistory();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const userState = useSelector(selectUser);
  const authenticated = userState.authenticated;
  let user = JSON.parse(userState.user);
  if (user) {
    getUserdataOnSnapashotDB(user.email, (callReturn) => {
      setTotalQuantity(callReturn.products.total);
    });
  }

  return authenticated ? (
    <div
      onClick={() => history.push("/Aurora_Store/cart")}
      id="cart-icon-container"
      className="flex-center"
    >
      <ion-icon name="cart-outline"></ion-icon> <span>({totalQuantity})</span>
    </div>
  ) : null;
};

export default Cart;
