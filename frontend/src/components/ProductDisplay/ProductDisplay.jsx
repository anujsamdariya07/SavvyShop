import React from 'react'
import './productDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

function ProductDisplay({ product }) {
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline  and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='product-display-right-category'>
          <span>Category:</span> Women, T-shirt, Crop Top
        </p>
        <p className='product-display-right-tag'>
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay