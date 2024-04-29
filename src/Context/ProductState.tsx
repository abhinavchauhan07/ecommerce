import React, { createContext, useState, useEffect } from "react";
import { Products } from "../components/DataTypes";
import Navbar from "../components/Navbar/Navbar";
import Category from "../components/Navbar/Category";
import GridDisplay from "../components/common/GridDisplay";
// import Cart from "../components/pages/cart/Cart";

type ProductContextType = {
  res: Products[];
  setRes: React.Dispatch<React.SetStateAction<Products[]>>;
  fetchMoreData: (value:number) => Promise<void>;
  category:any
};

const productContext = createContext<ProductContextType | undefined>(undefined);

const ProductState = ({ children }) => {
  
  const [res, setRes] = useState<Products[]>([]);
  const [category,setCategory]=useState<string[]>([])
  const fetchDataFromApi = async () => {
  
    try {
      // const response = await fetch('https://dummyjson.com/products');
      const response =await fetch(`https://dummyjson.com/products?limit=10&skip=0`)
      const result = await response.json();
      setRes(result.products);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCategories=async()=>{
    try{
      const response=await fetch('https://dummyjson.com/products/categories');
      const result = await response.json();
      setCategory(result);
    }catch(err)
    {
      console.log(err)
    }
  }
  
  const fetchMoreData = async (limit:number) => {
    const skip = res.length;
    if(res.length>90)return;

    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const result = await response.json();
      setRes(prevRes => [...prevRes, ...result.products]);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchDataFromApi();
    fetchCategories();
  },[]);

  // move to app.tsx
  return (
    <productContext.Provider value={{ res, setRes, fetchMoreData,category }}>
      <Navbar />
      <GridDisplay res={res}/>
    </productContext.Provider>
  );
};

export default ProductState;
export { productContext };
