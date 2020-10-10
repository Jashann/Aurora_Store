import React from "react";
import "./showcase.styles.scss";
import GridItem from "./../../Templates/Grid-item/GridItem.component";
import Products from "../../../Resources/data";

const Showcase = ({ history }) => {
  return (
    <div className="showcase-grid mt-4 mx-3">
      {Products.category.map((category) => (
        <GridItem key={category.name} name={category.name} img={category.img} />
      ))}
    </div>
  );
};

export default Showcase;
