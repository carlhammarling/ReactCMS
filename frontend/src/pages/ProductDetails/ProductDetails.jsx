import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.scss";
import RedBtn from "../../components/Buttons/RedBtn/RedBtn";
import WhiteBtn from "../../components/Buttons/WhiteBtn/WhiteBtn";
import OneProduct from "../../components/OneProduct/OneProduct";
import EditProductForm from "../../components/EditProductForm/EditProductForm";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/" + id).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log(product);
  }, [showInputs]);

  //Otherwise show this
  return (
    <div className="productDetails">
      <div className="row">
        <div className="left">
          <div
            className="bigImg"
            style={{ backgroundImage: `url("${product.imgURL}")` }}
          ></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="detailsDescription">
            <h2>Details for {product.name}</h2>
          </div>
          {showInputs ? (
            <EditProductForm product={product} setShowInputs={setShowInputs} />
          ) : (
            <OneProduct product={product} setShowInputs={setShowInputs} />
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
