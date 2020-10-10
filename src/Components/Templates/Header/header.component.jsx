import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Resources/logo.png";
import "./header.styles.scss";

import Cart from "../Cart-Icon/cartIcon.component";

import { signOut } from "./../../../Firebase/auth";
import { MessageHandler } from "../../../UIHandler/uiHandler";

function Header({ authenticated }) {
  const handleCartLink = (e) => {
    e.preventDefault();
    MessageHandler.showMessage(
      "You need to be signed to go to Cart",
      "Sign in"
    );
  };

  return (
    <header>
      <nav className="header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="" />
          </Link>
          <Cart authenticated={authenticated} />
          <div onClick={toggleNav} id="menu-icon">
            <ion-icon name="menu-outline" size="large"></ion-icon>
          </div>
        </div>
      </nav>

      <ul id="side-nav" className="side-nav">
        <li onClick={toggleNav}>
          <Link to="/Aurora_Store">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li onClick={toggleNav}>
          <Link to="/Aurora_Store/">
            <ion-icon name="home-outline"></ion-icon> <span>Home</span>
          </Link>
        </li>
        <li onClick={toggleNav}>
          <Link to="/Aurora_Store/shop">
            <span>
              {" "}
              <ion-icon name="pricetag-outline"></ion-icon> Shop
            </span>
          </Link>
        </li>
        <li onClick={toggleNav}>
          <Link to="/Aurora_Store/search">
            <ion-icon name="search-outline"></ion-icon>
            <span>Search</span>
          </Link>
        </li>

        <li onClick={toggleNav}>
          {authenticated ? (
            <Link onClick={signOut} to="/Aurora_Store">
              <ion-icon name="log-out-outline"></ion-icon>
              <span>Sign Out</span>
            </Link>
          ) : (
            <Link to="/Aurora_Store/sign-in">
              <ion-icon name="log-in-outline"></ion-icon>
              <span>Sign In</span>
            </Link>
          )}
        </li>
        <li onClick={toggleNav}>
          {authenticated ? (
            <Link to="/Aurora_Store/cart">
              <ion-icon name="cart-outline"></ion-icon>
              <span>Cart</span>
            </Link>
          ) : (
            <a href="." onClick={handleCartLink}>
              <ion-icon name="cart-outline"></ion-icon>
              <span>Cart</span>
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}

function toggleNav() {
  document.querySelector("#side-nav").classList.toggle("open");
  document.body.classList.toggle("open");
}

export default Header;
