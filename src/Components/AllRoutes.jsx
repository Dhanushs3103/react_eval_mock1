// packages
import React from 'react'
import { Routes, Route } from 'react-router-dom'

//local imports
import  About from "../Pages/About.jsx";
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx"
import Products from "../Pages/Products.jsx"
import SingleProduct from "../Pages/SingleProduct.jsx"
import PrivateRoute from "../Components/PrivateRoute.jsx"

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}/>
        <Route path='/products/:id' element={<PrivateRoute><SingleProduct/></PrivateRoute>}/>
      </Routes>
    </>
  )
}
