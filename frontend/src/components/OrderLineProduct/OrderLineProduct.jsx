import { useEffect, useState } from "react";
import "./OrderLineProduct.scss";
import axios from "axios";

const OrderLineProduct = ({ prod }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/" + prod.product)
      .then((res) => {
        setProduct(res.data);
      }).catch((err) => {
        console.log(err.message)
      })
  }, []);

  if(!product) {
    return
  }
  return (
    <div className="orderLineProduct">
      <div
        className="productImg"
        style={{ backgroundImage: `url("${product.imgURL}")` }}
      ></div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{prod.quantity}</div>
      <div>€ {product.price * prod.quantity}</div>
    </div>
  );
};

export default OrderLineProduct;
