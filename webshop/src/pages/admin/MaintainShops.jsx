import React, { useRef } from 'react'

function MaintainShops() {
  // samamoodi, nagu kategooriatega (erinev url)
  const url = "https://rahel-react-webshop-10-23-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();

  return (
    <div>MaintainShops</div>
  )
}

export default MaintainShops