import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./AddProduct.scss";
import RedBtn from "../../components/Buttons/RedBtn/RedBtn";
import WhiteBtn from "../../components/Buttons/WhiteBtn/WhiteBtn";
import OneProduct from "../../components/OneProduct/OneProduct";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

const AddProduct = () => {
 
  return (
    <div className="productDetails">
      <div className="row">
        <div className="left">
          <div
            className="bigImg"
            style={{ backgroundImage: `url("https://images.pexels.com/photos/4405244/pexels-photo-4405244.jpeg?auto=compress&cs=tinysrgb&w=800")` }}
          ></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="detailsDescription">
            <h2>Create a new product</h2>
          </div>  
            <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
