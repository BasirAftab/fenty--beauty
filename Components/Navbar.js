import {React} from 'react'
import '../index.css';
import Maincomponent from './Maincomponent';
import { IoBagOutline } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import pkicon from '../Asseset/pkicon.png';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";




const Navbar = () => {
 
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {  isAuthenticated} = useAuth0();
  return (
    <>
    <div className='flex-row  item-center  mt-0 pt-0 navbar  h-{15vh} '>
     <Maincomponent/>
    <div className='flex items-center w-full  mainheading h-12 '>

      <div className='flex'>
        <h3  className='font-serif mx-4 h1' > ENGLISH | PAKISTAN   </h3>
        <img className='h-4 pkicon mt-1' src={pkicon}/>
        </div>       
        <div className='fentybeauty'>
        <h2 className='from-neutral-50 text-xl m-96 h2'> FENTY BEAUTY</h2>

        </div>
        <div className='flex    h-6 w-28 justify-around cursor-pointer navicons '>
        {/* <button><MdOutlineAccountCircle/></button> */}
        {/* <MdOutlineAccountCircle/></button> */}

       <Link className='mt-1' to='/Profile'> <MdOutlineAccountCircle/></Link>

          
            {isAuthenticated ? (
              <button className='naviconsstyle' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <BiLogOutCircle/></button> 
            ):(
              <button className='naviconsstyle' onClick={() => loginWithRedirect()} > < RiLoginCircleLine/> </button>

            )}
          
       
        {/* <button className='naviconsstyle' onClick={() => loginWithRedirect()} > < RiLoginCircleLine/> </button> */}
        {/* <button className='naviconsstyle' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <BiLogOutCircle/> </button> */}
        {/* <button >  <IoBagOutline /> </button> */}
       <Link className='mt-1' to='/Cart'>  <IoBagOutline />   </Link>
       
        </div>
        
        <div className='hamburger cursor-pointer'>
          <Link to='/'> <RxHamburgerMenu /></Link>
       </div>


    </div>
    <div >
       <nav className='w-full' >
            <ul className='flex justify-evenly align-middle cursor-pointer nav-links '>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/Makeup'> <li>Make up</li> </Link>
                <Link to='/Fragrance'> <li>Fragrance</li> </Link>
                <Link to='/Accessories'> <li>Accessories</li> </Link>
                <Link to='/Skincare'> <li>Skin care</li> </Link>
            </ul>
        </nav>
    </div>

    </div>
    </>
  )
}

export default Navbar
