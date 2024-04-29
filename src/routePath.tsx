import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import { Route } from "react-router-dom";
import SignUpForm from "./components/forms/SignUp";
import LoginComp from "./components/forms/LogInComp";
import ProductDetails from "./components/pages/products/ProductDetails";
import ParticularCategory from "./components/pages/ParticularCategory";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart/>} />
      <Route path="login" element={<LoginComp/>} />
      <Route path="signup" element={<SignUpForm/>} />
      <Route path="products/:id" element={<ProductDetails/>}/>
      <Route path="products/category/:element" element={<ParticularCategory/>}/>
    </Route>
  )
);
