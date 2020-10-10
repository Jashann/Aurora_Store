import React, { useState } from "react";
import "./search.styles.scss";

import { selectData } from "./../../../Redux/dataSlice";
import { useSelector } from "react-redux";

import Products from "./../../Templates/Products/Products.component";

export default function Search() {
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  let filteredProducts = [];

  const dataObject = useSelector(selectData);
  if (!data) setData(dataObject);

  const searchProduct = () => {
    Object.entries(data.products).forEach((array) =>
      array[1].forEach((item) => {
        const productName = item.name.toLowerCase();
        const searchText = searchValue.toLowerCase();
        if (productName.includes(searchText)) filteredProducts.push(item);
      })
    );
  };

  if (searchValue) searchProduct();

  return (
    <div className="search-form-container p-3 ">
      <form className="d-flex flex-center">
        <input
          type="text"
          placeholder="Enter a product name: Nike Hat"
          className="font-1"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button id="search-btn" className="flex-center" type="submit">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>

      {filteredProducts && searchValue.length > 0 ? (
        <Products category="Filtered Products" products={filteredProducts} />
      ) : // <div className="products">
      //   <div className="products-container">

      //     {filteredProducts.map(({ name, img, id, price }, index) => {
      //       return (
      //         <Product key={id} name={name} img={img} id={id} price={price} />
      //       );
      //       return null;
      //     })}
      //   </div>
      // </div>
      null}
    </div>
  );
}
