import React, { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = () => {
    // KODUS
    // refreshiga tuleb tagasi
    // mine vaata kas avalehele, kas on kustunud (peab kustutama failist, mitte products usestate muutujast)
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) );
    setProducts(result);
  }

  return (
    <div>
      <div>{products.length} tk</div>
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      {products.map(product => 
      <div key={product.id} className={product.active ? "active" : "inactive" }>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div>{product.category}</div>
        <div>{product.active + 0}</div>
        <button onClick={deleteProduct}>X</button>
        <Link to={"/admin/edit/" + product.id}>
          <button>Muuda</button>
        </Link>
      </div>)}
    </div>
  )
}

export default MaintainProducts