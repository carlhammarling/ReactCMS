import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./OrderDetails.scss";
import { Navigate, useParams } from "react-router-dom";
import OrderLineProduct from "../../components/OrderLineProduct/OrderLineProduct";
import OrderList from "../OrderList/OrderList";
import { UserContext } from "../../contexts/UserContext";

const OrderDetails = () => {
  const token = localStorage.getItem("token");

  const { user } = useContext(UserContext)

  if(!user) {
    return <Navigate to='/' replace />
  }

  const { id } = useParams();

  const [oneOrder, setOneOrder] = useState();
  const [success, setSuccess] = useState(false);
  //To be able to run the PATCH only when button is clicked, and not while fetching the initial data.
  const [buttonClicked, setButtonClicked] = useState(false);

  //Get order bi ID
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOneOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Toggle marked as delivered
  const handlePending = (e) => {
    e.preventDefault();

    setButtonClicked(state => !state)

    setOneOrder((order) => {
      return {
        ...order,
        pending: !order.pending,
      };
    });
  };

  useEffect(() => {
    if (buttonClicked && oneOrder) {
      axios
        .patch("http://localhost:8080/api/orders/" + id, oneOrder, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        .then((res) => {
          if (res.status == 201) {
            // Showing success-message for 1seconds
            setButtonClicked(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 1000);
          }
          console.log(res);
        })
        .catch((error) => console.error(error));
    }
  }, [buttonClicked, oneOrder]);

  if(!oneOrder) {
    return
  }

  return (
    <div className="orderList">
      <div className="orderListContainer">
        <div className="summaryHeader">
          <h1>Order Summary</h1>
          
          <button
            className={`${success ? "success" : ""} redBtn`}
            onClick={handlePending}
          >
            {success ? "Order updated" : 'Change order status'}
          </button>
          
        </div>
        {oneOrder && (
          <div className="orderSummary">
            <div className="summaryLine">
              <p>Customer:</p>
              <p>{oneOrder.user.email}</p>
            </div>
            <div className="summaryLine">
              <p>Order date:</p>
              <p>{oneOrder.createdAt.slice(0, 10)}</p>
            </div>
            <div className="summaryLine">
              <p>Order status:</p>
              <p>{oneOrder.pending ? "Not delivered" : "Delivered"}</p>
            </div>
            <div className="summaryLine">
              <p>Order ID:</p>
              <p>#{oneOrder._id}</p>
            </div>
            <div className="summaryLine">
              <p>Total price:</p>
              <p>€ {oneOrder.totalPrice}</p>
            </div>
          </div>
        )}
        <div className="oneOrderLineDescription">
          <div></div>
          <div>
            <p>Product</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Total quantity</p>
          </div>
        </div>

        {/* CHANGE */}
        {oneOrder &&
          oneOrder.orderLines.map((prod) => (
            <OrderLineProduct key={prod._id} prod={prod} />
          ))}
        <div className="oneOrderLineDescription noLine">
          <div></div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p>Total:</p>
          </div>
          <div>
            <p> € {oneOrder && oneOrder.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
