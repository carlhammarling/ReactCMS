import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.scss";
import RedBtn from "../../components/Buttons/RedBtn/RedBtn";
import WhiteBtn from "../../components/Buttons/WhiteBtn/WhiteBtn";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/" + id).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log(product);
  }, []);

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
          <div className="details">
            <div className="propLine">
              <p>Title: </p>
              <p>{product.name}</p>
            </div>
            <div className="propLine">
              <p>Description: </p>
              <p>{product.description}</p>
            </div>
            <div className="propLine">
              <p>Category: </p>
              <p>{product.category}</p>
            </div>
            <div className="propLine">
              <p>Price: </p>
              <p>{product.price}</p>
            </div>
            <div className="propLine">
              <p>ID: </p>
              <p>{product._id}</p>
            </div>
            <div className="propLine">
              <p>Created: </p>
              <p>{product.createdAt}</p>
            </div>
            <div className="propLine">
              <p>Image URL: </p>
              <p>{product.imgURL}</p>
            </div>
            
          </div>

          <div className="buttons">
            <WhiteBtn text="Edit Product"/>
            <RedBtn text="Delete Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
