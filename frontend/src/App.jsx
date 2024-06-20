// import './App.css'
import { Footer, Navbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, LoginSignUp, Product, Shop, ShopCategory } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category='men' />} />
          <Route path='/women' element={<ShopCategory category='women' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App