import React from 'react'
import './descriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionBox'>
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">
          Description
        </div>
        <div className="descriptionBox-nav-box fade">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An ecommerce website is an online platform what facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individual showcase there products, interact with customers, and conduct transactions without the need for a physical presence.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox