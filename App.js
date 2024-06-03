
import Navbar from './Components/Navbar';
import Home from './Components/Home.js';
import  Fragrance from './Components/Fragrance.js';
import './index.css';
import Footer from './Components/Footer.js';
import Accessories from './Components/Accessories.js'
import Makeup from './Components/Makeup.js';
import Skincare from './Components/Skincare.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Components/Profile.js';
import Data from './data.js';
import Cart from './Components/Cart.js';
import { useState } from 'react';
// import React,{useState} from 'react';






function App() {


  const [cartItem, setCartItem] = useState([]);

  const addtoCart = (product) => {
    setCartItem([...cartItem, product]);
  };
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home addtoCart={addtoCart} Data={Data}/>
        <Footer />
      </>
    ),
  },
  {
    path: '/Fragrance',
    element: (
      <>
        <Navbar />
        <Fragrance addtoCart={addtoCart} Data={Data} /> 
      
        <Footer />
      </>
    ),
  },
  {
    path: '/Accessories',
    element: (
      <>
        <Navbar />
        <Accessories />
        <Footer />
      </>
    ),
  },
  {
    path: '/Makeup',
    element: (
      <>
        <Navbar />
        <Makeup addtoCart={addtoCart} Data={Data}/>
        <Footer />
      </>
    ),
  },
  {
    path: '/Skincare',
    element: (
      <>
        <Navbar />
        <Skincare />
        <Footer />
      </>
    ),
  },
  
  {
    path: '/Profile',
    element: (
      <>
        <Navbar />
        <Profile />
        <Footer />
      </>
    ),
  },
  {
    path: '/Cart',
    element: (
      <>
        <Navbar />
        <Cart cartItem={cartItem} setCartItem={setCartItem} />
        <Footer />
      </>
    ),
  },
  
 
 
  
]);

 
 
  return (
    <>
   {/* <Navbar/>
  <Home/>
  <Footer/>

  <Accessories/>
  <Makeup/>
  <Skincare/> */}
      
  <RouterProvider router = {router}/>
  
   </>
  );
  
  

}


export default App;
