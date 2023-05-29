import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./OrderList.scss";
import OrderLine from "../../components/OrderLine/OrderLine";

const OrderList = () => {
  const token = localStorage.getItem("token");

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {

      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orderList">
      <div className="orderListContainer">
        <div className="orderLineDescription">
          <div>
            <p>#ID</p>
          </div>
          <div>
            <p>Order date</p>
          </div>
          <div>
            <p>Status</p>
          </div>
          <div>
            <p>Total price</p>
          </div>
        </div>

        {/* CHANGE */}
        {
          orders && orders.map(order => (
            <OrderLine key={order._id} order={order}/>
          ))
        }


      </div>
    </div>
  );
};

export default OrderList;
