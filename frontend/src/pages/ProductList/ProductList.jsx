import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductLine from "../../components/ProductLine/ProductLine";

const ProductList = () => {
  //   const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data.allProducts);
      setProducts(res.data.allProducts);
    });
    console.log(products);
  }, []);

  return (
    <div className="productList">
      <div className="productListContainer">
        <div className="productLineDescription">
          <div></div>
          <div>
            <p>Product name</p>
          </div>
          <div>
            <p>#ID</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>

        {products &&
          products.map((item) => <ProductLine key={item._id} item={item} />)}

        <div className="productLineDescription noLine">
          <div></div>
          <div></div>
          <div>
            <p>Nr of products:</p>
          </div>
          <div>
            <p>{products.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
