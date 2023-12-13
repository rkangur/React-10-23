import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../../css/HomePage.css';
import { Spinner } from 'react-bootstrap';

// 27.11 localStorage-sse massiiv (array) ---> KOJU palju faile
// 29.11 objekt ostukorvis ---> kogused ostukorvis iga toote juures
//       kujundus ostukorvis
// 02.12 API päringud -> pakiautomaatide võtmine ---> KOJU mõni fail
// 06.12 andmebaasi kõik meie kategooriad, tooted, poed jne... ---> Nortali proovitöö
// 17.12 Alamkomponendid, CSS moodulid, Context, proovitöö vaatlus ---> veel mõned proovitööd
// 21.12 Lõpuprojekti esitlemine 1.5h

function HomePage() {
  const [products, setProducts] = useState([]); // Kõikuvas seisundis (HTMLs)
  const [dbProducts, setDbProducts] = useState([]); // ALATI ORIGINAALSED TOOTED 481tk
  const url = "https://rahel-react-veebipood-10-2023-default-rtdb.europe-west1.firebasedatabase.app/products.json"; 
  const categoryUrl = "https://rahel-react-veebipood-10-2023-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
      })

      fetch(categoryUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
  }, []);

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
    const index = cartFromLS.findIndex(cartProduct => cartProduct.toode.id === product.id);

    // kui ei leita, on jrk nr -1
    if (index >= 0) {
      cartFromLS[index].kogus += 1;
    } else {
      cartFromLS.push({"kogus": 1, "toode": product});
    }
    localStorage.setItem("cart", JSON.stringify(cartFromLS));

    // localStorage-sse pannes:
    // 1. võtta localStorage-st:   localStorage.getItem(VÕTI) || []
    // 2. võtta jutumärgid maha:   JSON.parse()
    // 3. lisada localStorage-st võetule üks juurde:    .push(UUS_ASI)
    // 4. panna jutumärgid tagasi: JSON.stringify()
    // 5. panna localStorage-sse tagasi:   localStorage.setItem(VÕTI, UUS_VÄÄRTUS)
  }

  // const filterByFigure = () => {
  //   const result = dbProducts.filter(product => product.category.toLowerCase() === "figure");
  //   setProducts(result);
  // }

  // const filterByLego = () => {
  //   const result = dbProducts.filter(product => product.category.toLowerCase() === "lego");
  //   setProducts(result);
  // }

  // const filterByStarWars = () => {
  //   const result = dbProducts.filter(product => product.category.toLowerCase() === "star wars");
  //   setProducts(result);
  // }

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(result);
  }

  if (dbProducts.length === 0 || categories.length === 0) {
    return <Spinner />
  }

  return (
    <div>
      <div>Toodete arv: {products.length} tk</div>

      <button onClick={sortAZ}>Sorteeri kasvavalt</button>
      <button onClick={sortZA}>Sorteeri kahanevalt</button>
      <button onClick={sortPriceAsc}>Sorteeri hinna järgi kasvavalt</button>
      <button onClick={sortPriceDesc}>Sorteeri hinna järgi kahanevalt</button>
      {/* <button onClick={filterByFigure}>Filtreeri "Figure" tooted</button>
      <button onClick={filterByLego}>Filtreeri "Lego" tooted</button>
      <button onClick={filterByStarWars}>Filtreeri "StarWars" tooted</button> */}
      <select onChange={e => filterByCategory(e.target.value)}>{ categories
                  .map( category => 
                  <option key={category.name} value={category.value}>{category.name}</option>
                  )}</select>
      
      <div className='products'>
        {products.map((product, index) => 
        <div key={product.id} className='home-product'>
          <img className='home-image' src={product.image} alt="" />
          <div>{product.id}</div>
          <div className='home-productName'>{product.name}</div>
          <div>{product.price}</div>
        
          <Link to={"/product/" + product.id}>
            <Button variant="outlined" >Vaata lähemalt</Button>
          </Link>

          <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
        </div>)}
      </div>
    </div>
  )
}

export default HomePage