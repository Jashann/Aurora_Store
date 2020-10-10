import React from "react";

import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import ProductsPage from "../../Templates/Products/Products.component";

// useLocation, useParams,

import { selectData } from "./../../../Redux/dataSlice";

export default function CategoryPage() {
  const Products = useSelector(selectData);

  //   const location = useLocation();
  //   const params = useParams();
  const match = useRouteMatch();
  const category = match.params.category; // Hats,
  const categoryKey = match.params.category.toLowerCase();

  return (
    <ProductsPage
      category={category}
      products={Products.products[categoryKey]}
    />
  );
}
