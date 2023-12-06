import React, { useState, useEffect } from 'react'
// import productsCartFile from '../../data/cart.json'
import "../../css/Cart.css";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParchelMachines] = useState([]);

  // uef - lehele tulles tehakse koheselt API päring (1x)
  // esimene response võtab kogu tagastuse, mis järgmise reale sisendiks (set uuendab 1x HTML lehte)
  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json())
      .then(json => setParchelMachines(json))
  }, []);

  const decreaseQuantity = (index) => {
    cart[index].kogus -= 1;
    if (cart[index].kogus === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  const increaseQuantity = (index) => {
    cart[index].kogus += 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(product => {
      sum += product.toode.price * product.kogus;
    })
    return sum.toFixed(2);
  }

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculateCartSum(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://raheli-veebipood.web.app/cart"
    }
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(paymentBody), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link)
  }
  
  // URL oleme vahetanud:
  // HTMLs: <Link to="/cart">
  // JavaScriptis: useNavigate("/admin")
  // window.location.href ---> kui suunatakse välisele URL-le
  // heaterid on meta andmed
  // PUT asendab, POST lisab aga firebase tahab alati asendamist!

  return (
    <div>
      <div>Ostukorvis olevate toodete arv: {cart.length} </div>
       {cart.map((product, index) => 
      <div className="product" key={product.toode.id}>
        <img className="image" src={product.toode.image} alt="" />
        {/* <div>{product.id}</div> */}
        <div className="name">{product.toode.name}</div>
        <div className="price">{product.toode.price.toFixed(2)} €</div>
        <div className="quantity">
          <img className="button" src="/minus.png" alt="" onClick={() => decreaseQuantity(index)} />
          <div>{product.kogus} tk</div>
          <img className="button" src="/plus.png" alt="" onClick={() => increaseQuantity(index)}/>
        </div>
        <div className="total">{(product.toode.price * product.kogus).toFixed(2)} tk</div>
        <img className="button" src="/cross.png" alt="" onClick={() => removeFromCart(index)}/>
      </div>)}
        { cart.length === 0 ? <img className="chartImage" src="empty.png" alt="The cart is empty!" /> :
         <div> 
          <div>Kokku: {calculateCartSum()} € </div> 
          <button className="button2" onClick={() => emptyCart()}>Tühjenda ostukorv</button>
        </div> } <br />

        <div>Vali pakiautomaat:</div>
        <select>{parcelMachines
                    .filter(pm => pm.NAME !== "1. eelistus/Picapac pakiautomaat")
                    .filter(pm => pm.A0_NAME === "EE")
                    .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>

        <button onClick={pay}>Maksa</button>
    </div>
    )
}

export default Cart