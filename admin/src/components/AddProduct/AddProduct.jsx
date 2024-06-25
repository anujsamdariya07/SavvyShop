import React, { useState } from 'react'
import './addProduct.css'
import uploadArea from '../../assets/upload_area.svg'
import { Form } from 'react-router-dom'

function AddProduct() {
  const [image, setImage] = useState(false)

  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    newPrice: '',
    oldPrice: '',
  })

  const imageHandler = (event) => {
    setImage(event.target.files[0])
  }
  const changeHandler = (event) => {
    setProductDetails({ ...productDetails, [event.target.name]: event.target.value })
  }
  const addProduct = async (event) => {
    console.log(productDetails)
    let responseData
    let product = productDetails

    let formData = new FormData()
    formData.append('product', image)

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => responseData = response)

    if (responseData.success) {
      product.image = responseData.imageUrl
      console.log(product)
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then((response) => response.json())
      .then((response) => {
        response.success? alert('Product Added'): alert('Failed')
      })
    }
  }

  return (
    <div className='addProduct'>
      <div className="addProduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here...' id="" />
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemfield">
          <p>Price</p>
          <input value={productDetails.oldPrice} onChange={changeHandler} type="text" name='oldPrice' placeholder='Type Here...' />
        </div>
        <div className="addProduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.newPrice} onChange={changeHandler} type="text" name='newPrice' placeholder='Type Here...' />
        </div>
      </div>
      <div className="addProduct-itemfield">
        <p>Product Category</p>
        <select name="categiry" className='addProduct-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addProduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : uploadArea} className='addProduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={() => (addProduct())} className='addProduct-button'>Add</button>
    </div>
  )
}

export default AddProduct