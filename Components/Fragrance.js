import React from 'react'
import '../index.css'
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom';
import data3 from '../Fragrance.js';
import image01 from '../Asseset/image27.png';
import image02 from '../Asseset/image29.png';
import image03 from '../Asseset/frag07.webp';


const fragrance = ({ addtoCart }) => {
  return (
    <div > 
      {/* banner 01 */}
      <div className='fragbanner'>

        <div className='brownbanner'>

          <h1>FRAGRANCE</h1>
          <p>Explore Fenty Eau De Perfume</p>
          <p>Shop All Fragrance</p>
          <p>Fenty Perfum Body Cream</p>
          <p>Exclusive Fragrance Set</p>
          <p>Fragrance Minis</p>


        </div>

        <div className='banner01'>
          <img src={image01} />

        </div>
        <div className='banner02'>
          <img src={image02} />

        </div>
        <div className='banner03'>
          <img src={image03} />

        </div>
        <div className='brownbanner'>

          <h1>FRAGRANCE</h1>
          <p>Explore Fenty Eau De Perfume</p>
          <p>Shop All Fragrance</p>
          <p>Fenty Perfum Body Cream</p>
          <p>Exclusive Fragrance Set</p>
          <p>Fragrance Minis</p>


        </div>
         

         
      </div>

      {/* content main */}

      
    
      <div>
  
      <div className="mt-11 mb-11 mx-5 ">
      <h1 className="text-4xl font-bold">   MAKE IT YOUR SIGNATURE SCENT </h1>
      <p>They’ll be the center of attention with Rihanna’s signature warm, floral scent !</p>
    </div>  


    {/* main content */}

     <div className="gridcontainer">
      <div className="boxContainer">

        { 
        data3.map((productItems)=>{
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
      </div>
    
    
    </div>
  )
}

export default fragrance
