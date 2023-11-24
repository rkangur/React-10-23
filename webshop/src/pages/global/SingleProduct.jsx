import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'

// 1. Suunake HomePage lehelt SingleProduct URL-le, saates kaasa ID
// 2. App.js sees võimaldage panna ID URLi sisse
// 3. SingleProductis võtke selle saadetud ID
// 4. Otsige selle ID alusel toode üles
// 4a. Importisime kõik tooted
// 5. Muutke see saadud ID numbriks, sest URLst tulevad ainult sõnad
// 6. Kui ei leitud, siis tehke varajane return
// 7. Kuvage välja HTMLs see leitud toote (kui leiti ehk läks varajasest returnist üle)
// Vaadake nii EditProducti kui ka eesti keelset projekti

function SingleProduct() {
  const { product_id } = useParams();
  const found = productsFromFile.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  

  if (found === undefined) {
    return <div>Ei leitud</div>
  }

  return (
    <div>
      <div ref={idRef} type="number">Product id: {found.id}</div> <br />
      <div ref={nameRef} type="text">Product name: {found.name}</div> <br />
      <div ref={priceRef} type="number">Price: {found.price}</div> <br />
      <img ref={imageRef} src={found.image} alt=""/> <br />
    </div>
    )
  }

export default SingleProduct