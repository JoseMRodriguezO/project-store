import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Products";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Country Fresh Finer Foods</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
