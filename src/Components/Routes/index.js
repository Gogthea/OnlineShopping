import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';
import Cart from '../../Pages/Cart';
import Category from '../../Pages/Category'  

export default function Approuter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:categoryId' element={<Category/>}/>
        <Route path='products/' element={<Products/>}/>
        <Route path='cart/' element={<Cart/>}/>
        

        <Route/>
    </Routes>
    
  )
}
