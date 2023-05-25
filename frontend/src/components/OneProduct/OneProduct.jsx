import { useState} from "react";
import "./OneProduct.scss";
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const OneProduct = ({ product, setShowInputs }) => {

  const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { id } = useParams();

  const [success, setSuccess] = useState(false)

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete("http://localhost:8080/api/products/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
    .then((res) => {
      if(res.status == 200) {
        //Showing success-message for 2seconds
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false);
            setShowInputs(state => !state);
            navigate('/productlist')
        }, 1000)

        
    }
    })
    .catch((error) => console.error(error));
  }

  return (
    <>
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
          <p>€ {product.price}</p>
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
        <button
          className="whiteBtn"
          onClick={() => setShowInputs((state) => !state)}
        >
          Edit Product
        </button>
        <button
          className={`${success ? "success" : ""} redBtn`}
          onClick={handleDelete}
        >
          {success ? "Deleted from DB" : "Delete Product"}
        </button>
      </div>
    </>
  );
};

export default OneProduct;
