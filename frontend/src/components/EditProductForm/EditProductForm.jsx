import { useState } from 'react'
import './EditProductForm.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProductForm = ({product, setShowInputs}) => {

    const token = localStorage.getItem("token");
    const { id } = useParams();

    const [success, setSuccess] = useState(false)


    const [updatedProduct, setUpdateProduct] = useState({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        imgURL: product.imgURL
    })

    const handleChange= (e) => {
        e.preventDefault()

        setUpdateProduct(prevProd => {
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
        axios.put("http://localhost:8080/api/products/" + id, updatedProduct, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          
        .then((res) => {
            console.log(res)
            if(res.status == 200) {
                //Showing success-message for 1seconds
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false);
                    setShowInputs(state => !state)
                }, 1000)

                
            }
        })
        .catch((error) => console.error(error));
        
        
    }


  return (
    <form noValidate onSubmit={handleSubmit}>
        <div className="input-group">
            <label htmlFor="name">Title:</label>
            <input data-testid="input" id="name" onChange={handleChange} type="text" value={updatedProduct.name} />
        </div>
        <div className="input-group">
            <label htmlFor="description">Description:</label>
            <input id="description" onChange={handleChange} type="text" value={updatedProduct.description} />
        </div>
        <div className="input-group">
            <label htmlFor="category">Category:</label>
            <input id="category" onChange={handleChange} type="text" value={updatedProduct.category} />
        </div>
        <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input id="price" onChange={handleChange}type="number" value={updatedProduct.price}/>
        </div>
        <div className="input-group">
            <label htmlFor="imgURL">Image URL:</label>
            <input id="imgURL" onChange={handleChange} type="text" value={updatedProduct.imgURL}/>
        </div>
    <div className="buttons">
        <button
          className="whiteBtn"
          onClick={(e) => {e.preventDefault(); setShowInputs((state) => !state);}}
        >
          Discard Changes
        </button>
        <button
          className={`${success ? "success" : ""} redBtn`}
        >
          {success ? "Save Successfull" : "Save Product"}
        </button>
        
      </div>
    </form>

  )
}

export default EditProductForm