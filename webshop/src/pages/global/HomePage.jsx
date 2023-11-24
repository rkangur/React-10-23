import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom'

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = (a,b) => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  const addToCart = () => {

  }

  const filterByFigure = (product) => {
    const result = productsFromFile.filter(product.category === "Figure");
    setProducts(result);
  }

  const filterByLego = () => {
    
  }

  const filterByStarWars = () => {
    
  }

  return (
    <div>
      <button onClick={sortAZ}>Sorteeri kasvavalt</button>
      <button onClick={sortZA}>Sorteeri kahanevalt</button>
      <button onClick={sortPriceAsc}>Sorteeri hinna järgi kasvavalt</button>
      <button onClick={sortPriceDesc}>Sorteeri hinna järgi kahanevalt</button>

      {products.map(product => 
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        {/* <div>{product.description}</div> */}
        {/* <div>{product.category}</div> */}
        {/* <div>{product.active}</div> */}
        <Link to={"/product/" + product.id}>
          <button>Vaata lähemalt</button>
        </Link>
      </div>)}
    </div>
  )
}

export default HomePage