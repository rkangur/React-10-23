import React, { useState } from 'react'
// import productsCartFile from '../../data/cart.json'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(product => {
      sum += product.price;
    })
    return sum.toFixed(2);
  }
  
  return (
    <div>
      <div>Ostukorvis olevate toodete arv: {cart.length} </div>
       {cart.map((product, index) => 
      <div key={product.id}>
        <img src={product.image} alt="" />
        {/* <div>{product.id}</div> */}
        <div>{product.name}</div>
        <div>{product.price}</div>
        <button onClick={() => removeFromCart(index)}>X</button>
      </div>)}
        { cart.length === 0 ? <img className="chartImage" src="empty.png" alt="The cart is empty!" /> :
         <div> 
          <div>Kokku: {calculateCartSum()} € </div> 
          <button onClick={() => emptyCart()}>Tühjenda ostukorv</button>
        </div> }
    </div>
    )
}

export default Cart