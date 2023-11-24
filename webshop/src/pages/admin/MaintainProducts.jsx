import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import productsFromFile from '../../data/products.json'


function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    // refreshiga tuleb tagasi
    // mine vaata avalehele, kas on kustunud (peab kustutama failist, mitte products usestate muutujast)
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) );
    setProducts(result);
  }

  return (
    <div>
      <div>{products.length} tk</div>
      <label>Search from products:</label>
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      {products.map((product, index) => 
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div>{product.category}</div>
        <div>{product.active + 0}</div>
        <button onClick={() => deleteProduct(index)}>X</button>
        <Link to={"/admin/edit/" + product.id}>
          <button>Muuda</button>
        </Link>
      </div>)}
    </div>
  )
}

export default MaintainProducts