import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './OrderList.scss'
import OrderLine from "../../components/OrderLine/OrderLine";

const OrderList = () => {
//   const token = localStorage.getItem("token");



  return (
    <div className="orderList">
 
      <div className="orderListContainer">
        <div className="orderLineDescription">
          <div></div>
          <div>
            <p>Product name</p>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>#ID</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>

      {/* CHANGE */}
        <OrderLine />
        <OrderLine />
        <OrderLine />
        <OrderLine />
        

        {/* {cart &&
          cart.map((item) => <OrderLine key={item.product._id} item={item} />)}
        {totalPrice > 1 ? (
          <div className="orderLineTotal">
            <p>Total: € {totalPrice}</p>
          </div>
        ) : (
          <p>Could not get the productlist</p>
        )} */}
      </div>

    
    </div>
  );
};

export default OrderList;
