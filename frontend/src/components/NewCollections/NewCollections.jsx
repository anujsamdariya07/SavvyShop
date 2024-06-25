import React, { useEffect, useState } from 'react'
import './newCollections.css'
import Item from '../Item/Item'

function NewCollections() {
  const [new_collections, setNew_collections] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response) => response.json())
    .then((response) => setNew_collections(response))
  }, [])
  
  return (
    <div className='newCollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collections.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default NewCollections