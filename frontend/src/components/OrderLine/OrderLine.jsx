import React from 'react'
import './OrderLine.scss'

const OrderLine = () => {
  return (
    <div className='orderLine'>
        {/* <div className='productImg' style={{ backgroundImage: `url("${item.product.imgURL}")` }}></div> */}
        <div className='productImg'></div>
        <div>name</div>
        <div>€ 23</div>
        <div>4</div>
        <div>€ 3434</div>
        {/* <div className='productImg'></div>
        <div>{item.product.name}</div>
        <div>€ {item.product.price}</div>
        <div>{item.quantity}</div>
        <div>€ {item.product.price * item.quantity}</div> */}
    </div>
  )
}

export default OrderLine