import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  
  const edit = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(product_id));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.value.checked
    }
  }

  if (found === undefined) {
    return <div>Ei leitud</div>
  }

  return (
    <div>
      <label>ID</label> <br />
      <input ref={idRef} type="number" defaultValue={found.id}></input> <br />
      <label>Name</label> <br />
      <input ref={nameRef} type="text" defaultValue={found.name}></input> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price}></input> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image}></input> <br />
      <label>Categroy</label> <br />
      <input ref={categoryRef} type="text" defaultValue={found.category}></input> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}></input> <br />
    </div>
    )
  }

export default SingleProduct