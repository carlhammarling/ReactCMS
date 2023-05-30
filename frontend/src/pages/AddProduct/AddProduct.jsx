import { useContext, useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import "./AddProduct.scss";
import OneProduct from "../../components/OneProduct/OneProduct";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import { UserContext } from "../../contexts/UserContext";

const AddProduct = () => {

  const { user } = useContext(UserContext)

  if(!user) {
    //replace removes history
    return <Navigate to='/' replace />

  }
 
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
