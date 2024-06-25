import React from 'react'
import './sideBar.css'
import { Link } from 'react-router-dom'
import addProductIcon from '../../assets/Product_Cart.svg'
import addlistProductIcon from '../../assets/Product_list_icon.svg'

function SideBar() {
  return (
    <div className='sideBar unselectable'>
      <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
          <img src={addProductIcon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
          <img src={addlistProductIcon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar