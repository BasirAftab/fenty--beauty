import React from 'react';
import '../index.css';
import fb from '../Asseset/fb.jpg'
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div data-aos="fade-up" className=' w-full footer text-white '>
        

    <div className='flex justify-around mt-9'>

        
      <div className='mt-4'>
        <img className='max-h-8' src={fb}/>
        <p>BEAUTY FOR ALL</p>
      </div>
      
      <div className='mt-4'>

        <h1 className='text-2xl font-bold'>CUSTOMER SERVICE</h1>
        <p>Operating hours are from 9am-9pm </p>
        <p>EST Monday-Friday and 9am-6pm </p>
        <p>EST Saturday. Reach out today!</p>
      </div>
       

       <div className='mt-4'>
           <p>customerservice@fentybeauty.com</p>
           <p>1-855-440-7474</p>
           <p>  Order Status</p>
           <p> Shipping Information</p>
           <p>Returns</p>
           <p>Contact Us</p>
           <p> Help & FAQs</p>
           <p>  My Account</p>
       </div>

       <div className='mt-4'>
        <h1  className='text-2xl font-bold'>ABOUT</h1>
        <p>About the Brands</p>
        <p>Clara Lionel Foundation</p>
        <p>Student Discounts</p>
        <p>Career</p> 
       </div>

       </div>




       <div className='flex  w-2/12 mt-14 justify-around  footercontainer mb-2 cursor-pointer'>
       < SlSocialYoutube />
       <FaInstagramSquare />
       <FaFacebook />
       <FaTwitter />
       </div>
        

    </div>
  )
}

export default Footer
