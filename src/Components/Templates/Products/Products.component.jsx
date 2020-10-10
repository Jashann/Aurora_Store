import React from "react";
import Product from "../Product/Product.component";
import "./Products.styles.scss";
import { useHistory } from "react-router-dom";

export default function Products({ category, products, max }) {
  let history = useHistory();
  return (
    <div className="products">
      <h2
        className="products-category"
        onClick={() => history.push("/Aurora_Store/shop/" + category)}
      >
        #{category}
        {max !== undefined ? (
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        ) : null}
      </h2>
      <div className="products-container">
        {products.map(({ name, img, id, price }, index) => {
          if (max === undefined || max > index)
            return (
              <Product key={id} name={name} img={img} id={id} price={price} />
            );
          return null;
        })}
      </div>
    </div>
  );
}
