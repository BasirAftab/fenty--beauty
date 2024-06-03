import React from "react";
import '../index.css'
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import banner from '../Asseset/banner01.webp';
import image09 from '../Asseset/image09.webp';
import image10 from '../Asseset/image10.webp';
import image11 from '../Asseset/image11.jpg';
import {Link} from 'react-router-dom';

import Data from '../data.js';

const Home = ({ addtoCart }) => {
  



  return (
    <div className="maincontainer h-{100vh} w-full mt-6 ">
      
      {/* first banner */}
        <div data-aos="zoom-out" className=" flex text-center align-middle justify-center items-center bg-center bg-cover bg-red-950 text-white" > 
           <img className="h-2/4 w-2/4 banner01img" src={banner} alt="My Image" /> 
           <div className="">
            <p className="mx-20">New</p>
            <p className="mx-20 font-bold text-5xl">SUPERHCARG'D SKINCARE IN YOUR SHADES </p>
            <p className="mx-20">Hyderate, Boots skin elasticity, visibly fades dark spot </p>
          </div> 
        </div>
        

  
     
{/* section 01 */}
    <div className="mt-11 mb-11 mx-5 ">
      <h1 className="text-4xl font-bold">FENTY FAVES IN ROTATIONS</h1>
      <p>Discover everything from bestsellers to new arrivals.</p>
    </div>  


    {/* main content */}

     <div className="gridcontainer">
      <div className="boxContainer">

        { 
        Data.map((productItems)=>{
          return (
            <> 
            
            <div  className="image-container " >

                    <img className="cursor-pointer  "  src={productItems.image}/>
        
                        <p>RS: {productItems.price}</p>
                        <p>{productItems.name}</p>

                  <div className="flex  bg-{6b67671c} h-5 w-20 box justify-around cursor-pointer" >
                   <CiStar />
                   <CiStar />
                   <CiStar />
                   <CiStar />
                   <CiStar />
            
                   <button onClick={() => addtoCart(productItems)} > <  CiShoppingCart/></button>
             
                </div>
          
            <div>
            <Link to='/Cart'><button  className="addtoCart"> View to Cart</button></Link>
            </div>
            
          </div>
            </>
          )
        })

        }


          </div>
     </div>

     {/* section two */}
      <div className="sectionconatiner mt-9 bg-black text-white p-0">
      
        <div className="sectionbox bg-black">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex-col mx-9 text-center justify-center content-center"> 
          <h1 className="font-bold text-3xl">Fenty’s Got Your Back</h1>
          <p className="mx-3">Our exclusive services will answer all your needs!</p>
        </div>

          <div  data-aos="zoom-out-up">
             <img src={image09}/>
             <p>TRY ON SHADES</p>
          </div>

          <div data-aos="zoom-out-up">
          <img src={image10}/>
          <p>MEET YOUR MATCH</p>
          </div>

          <div data-aos="zoom-out-up">
          <img src={image11}/>
          <p>CHAT WITH EXPERTS</p>
          </div>


        </div>
      </div>


     {/* section three */}
      
      {/* <div className="mt-6 sectionthree">
      

        <div className="bannerimage01 flex  mt-9 h-1/4 w-full text-center justify-center content-center text-2xl items-center">
          <div data-aos="fade-right "
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"  >
           
           <div className="bannerimageheading">

            <h1>YOUR </h1>
            <h1>SKIN</h1>
            <p>NEEDS </p>
            <p>ATTENTION</p>
            <h1 className="text-white">Fenty Skin</h1>
          <button className=" btn pl-4 pr-4 mb-6 rounded-sm">QUICK SHOP</button>

           </div>
             
             
          </div>

          
          
        </div>
      </div> */}


      {/*section four  */}
      <div className="fourcontainer h-{20vh} w-full  mt-9">
         <div className="text-4xl text-center mt-0">
           <h>THE FENTY BRANDS</h>
         </div>
        <div className="fourbox  m-8">

        
         <div data-aos="zoom-in" className="flex div01 justify-center items-end">

          <div className="flex-col w-40  " >

             <h1 className="text-white">Fenty Beauty</h1>
             <button className=" btn pl-4 pr-4 mb-6 rounded-sm ">QUICK SHOP</button>

          </div>
          
         
         </div>

         <div data-aos="zoom-in" className="flex div02 justify-center items-end">
          <div  className="flex-col w-40  ">

          <h1 className="text-white">Fenty Skin</h1>
          <button className=" btn pl-4 pr-4 mb-6 rounded-sm">QUICK SHOP</button>

          </div>
         
         </div>

         <div data-aos="zoom-in" className="flex div03  justify-center items-end">

          <div  className="  ">
           <h1 className="text-white">Fenty Fragrance</h1>
           <button className=" btn pl-4 pr-4 mb-6 rounded-sm">QUICK SHOP</button>

          </div>
         </div>

         </div>
      </div>

     


    </div>
  )
}

export default Home
