
import React, { useEffect, useState } from 'react';
import './Navabar.css'
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import Category from './Category';
import { useContext } from 'react';
import { productContext } from '../../Context/ProductState';

type Ttype = {
  category: string[];
};

const Navbar = () => {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const { category } = useContext<any>(productContext);
  const getTotalItems = () => {
    const keys = Object.keys(localStorage);
    const totalItems = keys.length;
    setCount(totalItems);
  };

  const toggleLoginState = () => {
    setLoggedIn(!loggedIn);
  };

  useEffect(() => {
    getTotalItems();
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          Shop Karo <i className="fa-solid fa-basket-shopping"></i>
        </div>
        <SearchBar />
        <div className="container">
          <ul id="items">
            <li className="container-items">
              <NavLink to="/">Home</NavLink>
            </li>
            <div className="icon-cart">
              <li>
                <NavLink to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>{count}</span>
                </NavLink>
              </li>
            </div>
            <li className="container-items">
              <NavLink to="/login" onClick={toggleLoginState}>
                {loggedIn ? 'Logout' : 'Login'}
              </NavLink>
            </li>
            <li className="container-items">
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Category data={category}/>
      
    </>
  );
};

export default Navbar;











{/* <div className="category">
        <ul className="category-list">
          // {/* categorios,Create Component, pass list, */}
          {/* {category.map((element, index) => {
            return (
              <li className="category-items" key={index}>
                <Link to={`/products/category/${element}`}>{element}</Link> */}
              {/* </li> */}
             {/* ); */}
          {/* })} */}
        {/* </ul> */}
       {/* </div> */}