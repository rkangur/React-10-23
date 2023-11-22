import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom'

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {

  }

  const sortZA = () => {
    
  }

  const sortPriceAsc = () => {
    
  }

  const sortPriceDesc = () => {
    
  }

  const addToCart = () => {

  }

  const filterByFigure = () => {

  }

  const filterByLego = () => {
    
  }

  const filterByStarWars = () => {
    
  }

  return (
    <div>
      {products.map(product => 
      <div>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        {/* <div>{product.description}</div> */}
        {/* <div>{product.category}</div> */}
        {/* <div>{product.active}</div> */}
        <Link to={"/product/" + product.id}>
          <button>Lisa ostukorvi</button>
        </Link>
      </div>)}
    </div>
  )
}

export default HomePage