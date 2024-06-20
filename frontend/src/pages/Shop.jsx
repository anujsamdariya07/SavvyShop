import React from 'react'
import { Home, NewCollections, NewsLetter, Offers, Popular } from '../components'

function Shop() {
  return (
    <div>
      <Home/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop