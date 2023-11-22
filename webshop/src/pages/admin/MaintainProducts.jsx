import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = () => {
    // KODUS
    // refreshiga tuleb tagasi
    // mine vaata kas avalehele, kas on kustunud (peab kustutama failist, mitte products usestate muutujast)
  }

  return (
    <div>
      {products.map(product => 
      <div>
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