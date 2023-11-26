import React, { useState } from 'react'
import productsCartFile from '../../data/cart.json'

function Cart() {
  const [cart, setCart] = useState(productsCartFile);
  // 1. kuvage ostukorvi sisu Failist HTMLs välja
  // 2. võimaldage ostukorvist kustutada
  // 3. võimaldage ostukorvi tühjendada
  // 4. Arvutage ostukorvi kogusumma
  // 5. Näidake ostukorvis asuvate toodete hulka numbrina
  // 6. Kui ostukorv on tühi, siis peitke osad kohad ära
  // 7. öelge, et ostukorv on tühi VÕI pange mingi pilt, et ostukorv on tühi

  const removeFromCart = (index) => {
    productsCartFile.splice(index, 1);
    setCart(productsCartFile.slice());
  }

  const emptyCart = () => {
    productsCartFile.splice(0);
    setCart(productsCartFile.slice());
  }

  const calculateCartSum = () => {
    let sum = 0;
    productsCartFile.forEach(product => {
      sum += product.price;
    })
    return sum;
  }
  
  return (
    <div>
      <div>Ostukorvis olevate toodete arv: {cart.length} </div>
       {cart.map((product, index) => 
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
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