import React from 'react'
import '../index.css';
import Maincomponent from './Maincomponent';
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import pkicon from '../Asseset/pkicon.png'


const Navbar = () => {
 
  return (
    <>
    <div className='flex-row  item-center  mt-0 pt-0 navbar  '>
     <Maincomponent/>
    <div className='flex items-center w-full  mainheading h-12  '>
       
        <h3  className='font-serif mx-4 h1' > ENGLISH | PAKISTAN   </h3>
        <img className='h-4 pkicon' src={pkicon}/>
        <h2 className='from-neutral-50 text-xl m-96 h2'> FENTY BEAUTY</h2>
        
        <div className='flex    h-6 w-28 justify-around cursor-pointer navicons'>
        <MdOutlineAccountCircle />
       <CiSearch />
       <CiShoppingCart/>

        </div>
        
        <div className='hamburger cursor-pointer'>
       <RxHamburgerMenu />
       </div>


    </div>
    <div >
       <nav className='w-full' >
            <ul className='flex justify-evenly align-middle cursor-pointer'>
                <li href='#'><a>Home</a></li>
                <li href='#'><a>Make up</a></li>
                <li  href='#'><a>Fragrance</a> </li>
                <li  href='#'> <a>Accessories</a> </li>
                <li  href='#'><a>Skin care</a> </li>
            </ul>
        </nav>
    </div>

    </div>
    </>
  )
}

export default Navbar
