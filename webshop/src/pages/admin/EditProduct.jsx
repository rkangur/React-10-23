import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'

// 1. Suunasime MaintainProducts lehelt EditProduct URL-le, saates kaasa ID
// 2. App.js sees võimaldasime panna ID URLi sisse
// 3. EditProductis võtsime selle saadetud ID
// 4. Otsisime selle ID alusel toote üles
// 5. Muutsime selle saadud ID numbriks, sest URLst tulevad ainult sõnad
// 6. Kui ei leitud, siis tegime varajase returni
// 7. Kuvasime välja HTMLs selle leitud toote (kui leiti ehk läks varajasest returnist üle)

function EditProduct() {
  const { product_id } = useParams();
  const found = productsFromFile.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  
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
    navigate("/admin/products");
  }

    // URL-is sõne kujul, seetõttu võrdust ei toimu
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
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}></input> <br />
      <button onClick={edit}>Muuda</button>
    </div>
  )
}

export default EditProduct