import { useState } from 'react'
import './AddProductForm.scss'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProductForm = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { id } = useParams();

    const [success, setSuccess] = useState(false)
    const [badReq, setBadReq] = useState(false)

    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        imgURL: ""
    })

    const handleChange= (e) => {
        e.preventDefault()

        setNewProduct(prevProd => {
            const { id, value} = e.target
            return {
                ...prevProd,
                [id]: value
            }
        })
    }
    // console.log(updatedProduct)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/products", newProduct, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          
        .then((res) => {
            console.log(res)
            if(res.status == 200) {
                //Showing success-message for 1second in button
                setBadReq(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false);
                    navigate('/productlist')
                }, 1000)

                
            }
        })
        .catch((error) => {
          //Shows error message to user.
          if(error.response.status == 400) {
            setBadReq(true)
          }
        });
        
        
    }

  return (
    <form className='addProductForm' noValidate onSubmit={handleSubmit}>
        <div className="input-group">
            <label htmlFor="name">Title:</label>
            <input id="name" onChange={handleChange} type="text" value={newProduct.name} />
        </div>
        <div className="input-group">
            <label htmlFor="description">Description:</label>
            <input id="description" onChange={handleChange} type="text" value={newProduct.description} />
        </div>
        <div className="input-group">
            <label htmlFor="category">Category:</label>
            <input id="category" onChange={handleChange} type="text" value={newProduct.category} />
        </div>
        <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input id="price" onChange={handleChange}type="number" value={newProduct.price}/>
        </div>
        <div className="input-group">
            <label htmlFor="imgURL">Image URL:</label>
            <input id="imgURL" onChange={handleChange} type="text" value={newProduct.imgURL}/>
        </div>
    <div className="buttons">
        <button
          className="whiteBtn"
          onClick={(e) => {e.preventDefault(); navigate("/productlist");}}
        >
          Back to safety
        </button>
        <button
          className={`${success ? "success" : ""} redBtn`}
        >
          {success ? "Save Successfull" : "Save Product"}
        </button>


        
      </div>
        {badReq ? <p className='error'>Please fill in all forms!</p> : <p></p>}
    </form>

  )
}

export default AddProductForm