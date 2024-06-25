import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([])
  const [cartItems, setCartItems] = useState(getDefaultCart())

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
    .then((response) => response.json())
    .then((response) => setAll_product(response))
  }, [])

  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => ({ ...prevCartItems, [itemId]: prevCartItems[itemId] + 1 }))
    console.log(cartItems)
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => ({ ...prevCartItems, [itemId]: prevCartItems[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => (product.id === Number(item)))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () => {
    let totalItems = 0
    for (const item in cartItems) {
      totalItems += cartItems[item]
    }
    return totalItems
  }

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider