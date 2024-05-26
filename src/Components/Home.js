import React from "react";
import '../index.css'
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import banner from '../Asseset/banner01.webp';
import image01 from '../Asseset/image01.webp';
import image02 from '../Asseset/image02.webp';
import image03 from '../Asseset/image03.webp';
import image04 from '../Asseset/image04.webp';
import image05 from '../Asseset/image05.webp';
import image06 from '../Asseset/image06.webp';
import image07 from '../Asseset/image07.webp';
import image08 from '../Asseset/image08.webp';
import image09 from '../Asseset/image09.webp';
import image10 from '../Asseset/image10.webp';
import image11 from '../Asseset/image11.jpg';
import banner02 from '../Asseset/banner02.jpg';
import banner03 from '../Asseset/banner03.jpg';

const Home = () => {
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

      
          <div  className="image-container " >

            <img className="cursor-pointer  "  src={image01}/>
            
            
            <p>RS: 1200</p>
            <p>Fenty Beauty Stunna Lip Paint</p>
            <div className="flex  bg-{6b67671c} h-5 w-20 box justify-around cursor-pointer" >
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
          </div>
         

           <div>
            <img src = {image02}/>
             <p>RS: 35000</p>
            <p>Fenty Beauty Killawatt Highlighter</p>

            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div>
            <img src = {image03}/>
             <p>RS: 21000</p>
            <p>Fenty Beauty Full Frontal Mascara</p>
            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div>
            <img src = {image04}/>
             <p>RS: 9500</p>
            <p>Fenty Beauty Flyliner Longwear Liquid Eyeliner</p>
            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div>
            <img src = {image05}/>
             <p>RS: 14000</p>
            <p>Fenty Beauty Pro Filt’r Setting Powder</p>
            <div className="flex  bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div >
            <img src = {image06}/>
             <p>RS: 13000</p>
            <p>Fenty Beauty Cheeks Out Freestyle Cream Blush</p>
            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div >
            <img src = {image07}/>
             <p>RS: 13000</p>
            <p>Fenty Beauty Cheeks Out Freestyle Cream Blush</p>
            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>

           <div >
            <img src = {image08}/>
             <p>RS: 13000</p>
            <p>Fenty Beauty Cheeks Out Freestyle Cream Blush</p>
            <div className="flex   bg-{6b67671c}  h-5 w-20 box">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiShoppingCart/>

            </div>
           </div>


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
      
      <div className="mt-6 sectionthree">
      

        <div className="bannerimage01 flex  mt-9 h-1/4 w-full text-center justify-center content-center text-2xl items-center">
          <div data-aos="fade-right "
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"  >
           
           <div className="bannerimageheading">

            <h1>YOUR </h1>
            <h1>SKIN</h1>
            <p>NEEDS </p>
            <p>ATTENTION</p>
           </div>
             
             
          </div>

          
          
        </div>
      </div>


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
