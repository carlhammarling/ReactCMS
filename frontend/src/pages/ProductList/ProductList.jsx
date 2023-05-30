import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductLine from "../../components/ProductLine/ProductLine";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProductList = () => {

  const { user } = useContext(UserContext)

  if(!user) {
    return <Navigate to='/' replace />
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      setProducts(res.data.allProducts);
    });
  }, []);

  return (
    <div className="productList">
      <div className="productListContainer">
        <div className="productLineDescription">
          <div>
            <Link to="/add" className="redBtn">Add New product</Link>
          </div>
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
