import React from 'react'
import { SearchData } from '../DataTypes';

export const ApiCalling = async() => {
    try{
        const response= await fetch('https://dummyjson.com/products');
        const data= await response.json();
        return data;
    }
    catch{
        throw new Error('could not fetch the products');
    }
  
}

export const ApiSearch = async({text}:SearchData) => {
    try{
        const response= await fetch(`https://dummyjson.com/products/search?q=${text}`);
        const data= await response.json();
        return data;
    }
    catch{
        throw new Error('could not fetch the products');
    }
  
}
export const fetchCategoriesItems=async(category:string)=>{
    try{
      const response=await fetch(`https://dummyjson.com/products/category/${category}`);
      const result = await response.json();
      return result;
    }catch(err)
    {
      console.log(err)
    }
  }
export default ApiCalling
