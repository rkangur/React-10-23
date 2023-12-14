import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from '../../css/HomePage.module.css';
import { Spinner } from 'react-bootstrap';
import SortButtons from '../../components/home/SortButtons';
import { useCartSum } from '../../store/CartSumContext';

// 27.11 localStorage-sse massiiv (array) ---> KOJU palju faile
// 29.11 objekt ostukorvis ---> kogused ostukorvis iga toote juures
//       kujundus ostukorvis
// 02.12 API päringud -> pakiautomaatide võtmine ---> KOJU mõni fail
// 06.12 andmebaasi kõik meie kategooriad, tooted, poed jne... ---> Nortali proovitöö
// 17.12 Alamkomponendid (components, props), CSS moodulid, Context, proovitöö vaatlus ---> veel mõned proovitööd
// 21.12 Lõpuprojekti esitlemine 1.5h

function HomePage() {
  const [products, setProducts] = useState([]); // Kõikuvas seisundis (HTMLs)
  const [dbProducts, setDbProducts] = useState([]); // ALATI ORIGINAALSED TOOTED 481tk
  const url = "https://rahel-react-veebipood-10-2023-default-rtdb.europe-west1.firebasedatabase.app/products.json"; 
  const categoryUrl = "https://rahel-react-veebipood-10-2023-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const { setCartSum } = useCartSum();

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

  const addToCart = (product) => {
    const cartFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartFromLS.findIndex(cartProduct => cartProduct.toode.id === product.id);

    if (index >= 0) {
      cartFromLS[index].kogus += 1;
    } else {
      cartFromLS.push({"kogus": 1, "toode": product});
    }
    localStorage.setItem("cart", JSON.stringify(cartFromLS));
    let sum = 0;
    cartFromLS.forEach(product => sum += product.toode.price * product.kogus)
    setCartSum(sum.toFixed(2));
  }

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
      <SortButtons 
        products={products}
        setProducts={setProducts}
      />
      <select onChange={e => filterByCategory(e.target.value)}>{ categories
                  .map( category => 
                  <option key={category.name} value={category.value}>{category.name}</option>
                  )}</select>
      
      <div className={styles.products}>
        {products.map((product, index) => 
        <div key={product.id} className={styles.product}>
          <img className={styles.image} src={product.image} alt="" />
          <div>{product.id}</div>
          <div className={styles.name}>{product.name}</div>
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