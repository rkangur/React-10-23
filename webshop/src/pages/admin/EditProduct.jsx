import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import productsFromFile from '../../data/products.json'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next';

function EditProduct() {
  const { product_id } = useParams();
  const [dbProducts, setDbProducts] = useState([]); 
  const found = dbProducts.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const { t } = useTranslation();
  const url = "https://rahel-react-veebipood-10-2023-default-rtdb.europe-west1.firebasedatabase.app/products.json"; 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
      })
  }, []);
  
  
  const edit = () => {

    if (idRef.current.value === "") {
      toast.error("Id pole täidetud!");
      return;
    }

    if (nameRef.current.value === "") {
      toast("Nimi pole täidetud!");
      return;
    }

    if (nameRef.current.value[0] !== nameRef.current.value[0].toUpperCase()) {
      toast.error("Väikse algustähega ei saa alustada!");
      return;
    }

    if (priceRef.current.value === "") {
      toast("Hind pole täidetud!");
      return;
    }

    if (Number(priceRef.current.value) < 0) {
      toast("Hind peab olema positiivne!");
      return;
    }

    const index = dbProducts.findIndex(product => product.id === Number(product_id));
    dbProducts[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    fetch(url, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/products"));
  }

  const checkIdUniqueness = () => {
    const result = dbProducts.find(product => product.id === Number(idRef.current.value));

    if (result === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if (found === undefined) {
    return <div>Ei leitud</div>
  }

  return (
    <div>
      { idUnique === false && <div>Sistestatud ID ei ole unikaalne!</div>}
      <label>ID</label> <br />
      <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={found.id}></input> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" defaultValue={found.name}></input> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price}></input> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image}></input> <br />
      <label>{t("category")}</label> <br />
      <input ref={categoryRef} type="text" defaultValue={found.category}></input> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}></input> <br />
      <label>{t("active")}</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}></input> <br />
      <button disabled={idUnique === false} onClick={() => edit()}>{t("change")}</button>
      
      <ToastContainer 
      theme="dark"
      position='bottom-right'
      />
    </div>
  )
}

export default EditProduct