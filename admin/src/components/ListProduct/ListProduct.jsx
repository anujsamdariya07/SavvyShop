import React, { useEffect, useState } from 'react'
import './listProduct.css'
import cross_icon from '../../assets/cross_icon.png'

function ListProduct() {
  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((response) => setAllProducts(response))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({id: id})
    })
    await fetchInfo()
  }

  return (
    <div className='listProduct'>
      <h1>All Products List</h1>
      <div className="listProduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-all-products">
        <hr />
        {allProducts.map((product, i) => (
          <>
            <div key={i} className="listProduct-format-main lisProduct-format">
              <img className='listProduct-product-icon' src={product.image} alt="" />
              <p>{product.name}</p>
              <p>${product.oldPrice}</p>
              <p>${product.newPrice}</p>
              <p>{product.category}</p>
              <img onClick={() => {removeProduct(product.id)}} className='listProduct-remove-icon' src={cross_icon} alt="" />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}

export default ListProduct