import React from "react";
import "./ProductLine.scss";
import { Link } from "react-router-dom";

const ProductLine = ({ item }) => {
  return (
    <Link to={`/products/${item._id}`} className="productLine">
      <div
        className="productImg"
        style={{ backgroundImage: `url("${item.imgURL}")` }}
      ></div>
      <div>{item.name}</div>
      <div>{item._id}</div>
      <div>€ {item.price}</div>
    </Link>
  );
};

export default ProductLine;
