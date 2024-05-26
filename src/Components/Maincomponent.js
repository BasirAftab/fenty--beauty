import { createContext, useEffect, useContext, useReducer } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Maincomponent() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main'>
         <div data-aos="fade-down"  className=' bg-black white w-full h-9 text-center  text-white '>
        <p>Free shipping in all over Pakistan over RS:34000 order</p>
    </div>
      
    </div>
  )
}

export default Maincomponent
