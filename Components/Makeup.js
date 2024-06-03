import React from "react";
import '../index.css'
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Data2 from '../data2.js';
import {Link} from 'react-router-dom';


const Makeup = ({ addtoCart }) => {
  return (
  
        <div className="makeupcontainer ">

          {/* banner 01 */}

          <div data-aos="zoom-in" className="bannermakeup01 ">

            <div className="container01 ">
             <h1 >MAKEUP</h1>
             <p>Explore fenty beauty</p>
             <p>Concealer + Corrector</p>
             <p>Lipstick + Lipstrain</p>
             <p>Foundation</p>
             <p>Lip Gloss</p>
             <p>Contour + Brounzer</p>
             <p>Eye Makeup</p>
             <p>Blush + Brushes</p>
             <p>Makeup Minis</p>
             <p>Shop All Makeup</p>
            </div>

          </div>
            
        {/* main content */}
    <div className="maincontentmakeup">

          

      <div className="gridcontainer">
          <div className="makeupheading">
            <h1> ALL MAKEUP</h1>
          </div>
        <div className="boxContainer">

        { 
        Data2.map((productItems)=>{
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
            <Link to='/Cart' > <button className="addtoCart"> View to Cart</button></Link>
            </div>
            
          </div>
            </>
          )
        })

        }


         

         
           
          


          </div>

          </div>

         
    
             
             


          </div>

        </div>
   
  )
}

export default Makeup