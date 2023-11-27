import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
// import productsCartFile from '../../data/cart.json'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// 27.11 localStorage-sse massiiv (array) ---> KOJU palju faile
// 29.11 objekt ostukorvis ---> kogused ostukorvis iga toote juures
//       kujundus ostukorvis
// 02.12 API päringud -> pakiautomaatide võtmine ---> KOJU mõni fail
// 06.12 andmebaasi kõik meie kategooriad, tooted, poed jne... ---> Nortali proovitöö
// 11.12 Alamkomponendid, Context, proovitöö vaatlus ---> veel mõned proovitööd
// 21.12 Lõpuprojekti esitlemine 

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
    // NB! LocalStorage'st tuleb alati sõne sp JSON.parse muudab array-ks
    // JSON.parse võtab jutumärgid ära: "[{},{}]" ---> [{},{}]
    const cartFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartFromLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartFromLS));

    // localStorage-sse pannes:
    // 1. võtta localStorage-st:   localStorage.getItem(VÕTI) || []
    // 2. võtta jutumärgid maha:   JSON.parse()
    // 3. lisada localStorage-st võetule üks juurde:    .push(UUS_ASI)
    // 4. panna jutumärgid tagasi: JSON.stringify()
    // 5. panna localStorage-sse tagasi:   localStorage.setItem(VÕTI, UUS_VÄÄRTUS)
  }

  const filterByFigure = () => {
    const result = productsFromFile.filter(product => product.category.toLowerCase() === "figure");
    setProducts(result);
  }

  const filterByLego = () => {
    const result = productsFromFile.filter(product => product.category.toLowerCase() === "lego");
    setProducts(result);
  }

  const filterByStarWars = () => {
    const result = productsFromFile.filter(product => product.category.toLowerCase() === "star wars");
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
       
        <Link to={"/product/" + product.id}>
          <Button variant="outlined" >Vaata lähemalt</Button>
        </Link>

        <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
      </div>)}
    </div>
  )
}

export default HomePage