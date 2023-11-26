import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
import productsCartFile from '../../data/cart.json'
import { Link } from 'react-router-dom';

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

  const addToCart = (product) => {
    productsCartFile.push(
      {
      "id": product.id,
      "image": product.image,
      "name": product.name,
      "price": product.price,
      "description": product.description,
      "category": product.category,
      "active": product.active
    });
  }

  const filterByFigure = () => {
    const result = productsFromFile.filter(product => product.category === "figure");
    setProducts(result);
  }

  const filterByLego = () => {
    const result = productsFromFile.filter(product => product.category === "lego");
    setProducts(result);
  }

  const filterByStarWars = () => {
    const result = productsFromFile.filter(product => product.category === "star wars");
    setProducts(result);
  }

  return (
    <div>
      <div>Toodete arv: {products.length} tk</div>

      <button onClick={sortAZ}>Sorteeri kasvavalt</button>
      <button onClick={sortZA}>Sorteeri kahanevalt</button>
      <button onClick={sortPriceAsc}>Sorteeri hinna järgi kasvavalt</button>
      <button onClick={sortPriceDesc}>Sorteeri hinna järgi kahanevalt</button>
      <button onClick={filterByFigure}>Filtreeri "Figure" tooted</button>
      <button onClick={filterByLego}>Filtreeri "Lego" tooted</button>
      <button onClick={filterByStarWars}>Filtreeri "StarWars" tooted</button>

      {products.map((product, index) => 
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
        <button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
      </div>)}
    </div>
  )
}

export default HomePage