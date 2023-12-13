import React, { useRef, useState } from 'react'

function MaintainShops() {
  // samamoodi, nagu kategooriatega (erinev url)
  const url = "https://raheli-veebipood-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const addressRef = useRef();
  const urlRef = useRef();
  const [dbShops, setDbShops] = useState([]);

  
  
  const addShop = () => {
    dbShops.push( {
      "name": nameRef.current.value,
      "opentime": openTimeRef.current.value,
      "latitude": Number(latitudeRef.current.value),
      "longitude": Number(longitudeRef.current.value),
      "address": addressRef.current.value,
      "urlShop": urlRef.current.value
    });
    fetch(url, {"method": "PUT", "body": JSON.stringify(dbShops)})

    // nameRef.current.value = "";
    // openTimeRef.current.value = "";
    // latitudeRef.current.value = "";
    // longitudeRef.current.value = "";
    // addressRef.current.value = "";
    // urlRef.current.value = "";
  }

  return (
    <div>

      <label>Nimi</label> <br />
      <input ref={nameRef}></input> <br />
      <label>Lahtioleku aeg</label> <br />
      <input ref={openTimeRef}></input> <br />
      <label>Laiuskraad</label> <br />
      <input ref={latitudeRef}></input> <br />
      <label>Pikkuskraad</label> <br />
      <input ref={longitudeRef}></input> <br />
      <label>Aadress</label> <br />
      <input ref={addressRef}></input> <br />
      <label>Veebileht</label> <br />
      <input ref={urlRef}></input> <br /><br />
      <button onClick={addShop}>Lisa pood</button> <br />
    </div>
  )
}

export default MaintainShops