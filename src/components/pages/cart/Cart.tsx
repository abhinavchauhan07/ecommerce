import  { useEffect, useState } from "react";
import './Cart.css';

const Cart = () => {
  const[total,setTotal]=useState(0);
  const calculateTotal=()=>{
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const data = value && JSON.parse(value);
      setTotal(prevTotal=>prevTotal+data.price);
    });
  }
  useEffect(() => {
    calculateTotal();
  },[]);
  const handleRemoveItem = (key: string) => {
    localStorage.removeItem(key);
    window.location.reload();
  };
  const handleIncrementQuantity = (key: string) => {
    const value = localStorage.getItem(key);
    const item = value && JSON.parse(value);
    item.amount += 1;
    localStorage.setItem(key, JSON.stringify(item));
    calculateTotal();
    window.location.reload();
  };
  const handleDecrementQuantity = (key: string) => {
    const value = localStorage.getItem(key);
    const item = value && JSON.parse(value);
    if (item.amount === 1) {handleRemoveItem(key)}
    if (item.amount > 1) {
      item.amount -= 1;
      localStorage.setItem(key, JSON.stringify(item));
      calculateTotal();
      window.location.reload();
    }
  };

  return (
    <>
    <h2>Your Cart</h2>
    <article>
      {Object.keys(localStorage).map((key, index) => {
        const value = localStorage.getItem(key);
        const item = value && JSON.parse(value);
        return (
          <div className="cart_box" key={index}>
            <div className="cart_img">
              <img src={item?.images?.[0]} alt={item?.title} />
              <p>{item?.title}</p>
            </div>
            <div>
              <button onClick={() => handleIncrementQuantity(key)}> + </button>
              <button>{item?.amount ?? 1}</button>
              <button onClick={() => handleDecrementQuantity(key)}> - </button>
            </div>
            <div>
              <span>{item?.price}</span>
              <button onClick={() => handleRemoveItem(key)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span>Rs - {total}</span>
      </div>
    </article>
    </>
  );
};

export default Cart;
