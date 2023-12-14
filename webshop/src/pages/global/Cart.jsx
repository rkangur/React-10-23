import React, { useState } from 'react'
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import styles from "../../css/Cart.module.css";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
 

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

  return (
    <div>
      <div>Ostukorvis olevate toodete arv: {cart.length} </div>
       {cart.map((product, index) => 
      <div className={styles.product} key={product.toode.id}>
        <img className={styles.image} src={product.toode.image} alt="" />
        {/* <div>{product.id}</div> */}
        <div className={styles.name}>{product.toode.name}</div>
        <div className={styles.price}>{product.toode.price.toFixed(2)} €</div>
        <div className={styles.quantity}>
          <img className={styles.button} src="/minus.png" alt="" onClick={() => decreaseQuantity(index)} />
          <div>{product.kogus} tk</div>
          <img className={styles.button} src="/plus.png" alt="" onClick={() => increaseQuantity(index)}/>
        </div>
        <div className={styles.button}>{(product.toode.price * product.kogus).toFixed(2)} tk</div>
        <img className={styles.button} src="/cross.png" alt="" onClick={() => removeFromCart(index)}/>
      </div>)}
        { cart.length === 0 ? <img className="chartImage" src="empty.png" alt="The cart is empty!" /> :
         <div> 
          <div>Kokku: {calculateCartSum()} € </div> 
          <button className={styles.button} onClick={() => emptyCart()}>X</button>
        </div> } <br />

        <div>Vali pakiautomaat:</div>
        <ParcelMachines/>
        <Payment sum={calculateCartSum()}/>

    </div>
    )
}

export default Cart