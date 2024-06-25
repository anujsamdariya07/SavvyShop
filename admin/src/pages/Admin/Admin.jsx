import React from 'react'
import './admin.css'
import { AddProduct, ListProduct, SideBar } from '../../components'
import { Route, Routes } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
      <SideBar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />
      </Routes>
    </div>
  )
}

export default Admin