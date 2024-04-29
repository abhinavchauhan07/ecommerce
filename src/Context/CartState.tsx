
// import { Children, createContext, useState } from "react";
// import { Products } from "../components/DataTypes"
// import Cart from "../components/pages/cart/Cart";

// type CartContextType={
//     data:Products[];
//     setData:React.Dispatch<React.SetStateAction<Products[]>>;
// }

// const cartContext=createContext<any>(undefined);

// const CartState = (props: { children: React.ReactNode }) => {

//     const[data,setData]=useState<Products[]>([]);
//     console.log("hello")

//     console.log("hwllo",data);
//   return (
//     <cartContext.Provider value={{data,setData}}>
//         <Cart item={data}/>
//     </cartContext.Provider>
//   )
// }

// export default CartState;
// export{cartContext}

import React, { createContext, useState, useContext } from "react";
import { Products } from "../components/DataTypes";
import Cart from "../components/pages/cart/Cart";

type CartContextType = {
  cartItems: Products[];
  addToCart: (item: Products) => void;
};

const initialCartState: Products[] = [];

const CartContext = createContext<CartContextType|undefined>(undefined);

const CartState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartState);

  const addToCart = (item: Products) => {
    setCartItems(prevItems => [...prevItems, item]);
  };
console.log("cart",cartItems)
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <Cart/>
    </CartContext.Provider>
  );
};

export { CartState, CartContext };


