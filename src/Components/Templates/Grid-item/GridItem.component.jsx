import React from "react";
import "./GridItem.styles.scss";

import { useHistory } from "react-router-dom";

export default function GridItem({ name, img }) {
  let history = useHistory();
  return (
    <div
      className="showcase-grid-item"
      onClick={() => history.push(`/Aurora_Store/shop/${name}`)}
    >
      <img className="showcase-grid-item-img" src={img} alt={name} />
      <div className="showcase-grid-item-content">
        <div id="text" className="flex-center">
          {name} <ion-icon name="arrow-forward-circle-outline"></ion-icon>{" "}
        </div>
      </div>
    </div>
  );
}
