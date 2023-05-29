import React from 'react'
import './OrderLine.scss'
import { Link } from "react-router-dom";

const OrderLine = ({ order }) => {
  return (
    <Link to={`/orders/${order._id}`} className='orderLine'>
        <div>{order._id}</div>
        <div>{order.createdAt.slice(0,10)}</div>
        <div>{order.pending ? "Not delivered" : "Delivered"}</div>
        <div>€ {order.totalPrice}</div>
    </Link>
  )
}

export default OrderLine