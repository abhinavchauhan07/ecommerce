import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import App from '../App'
import Home from './pages/home/Home'
const Layout = () => {
  return (
    <>
    {/* <Navbar{}/> */}
    <Outlet/>
    </>
  )
}

export default Layout
