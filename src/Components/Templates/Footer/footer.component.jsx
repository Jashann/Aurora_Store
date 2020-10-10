import React from "react";
import logo from "./../../../Resources/logo.png";
import "./footer.styles.scss";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="logo" to="/Aurora_Store">
          <img src={logo} alt="logo" />
        </Link>
        <div className="font-2"> &copy; All Rights Reserved </div>

        <div className="social-media">
          <a
            className="icon-container d-flex flex-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100041474625043"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a
            className="icon-container d-flex flex-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Jashann"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a
            className="icon-container d-flex flex-center"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:jashangill3592@gmail.com?subject=I want to be connected to you"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
