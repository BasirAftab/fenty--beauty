
import Navbar from './Components/Navbar';
import Home from './Components/Home.js';
import  Fragrance from './Components/Fragrance.js';
import './index.css';
import Footer from './Components/Footer.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';





function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:<Fragrance/>

    },
  ]);
 
  return (
    <>
   <Navbar/>
  <Home/>
  <Footer/>

  <RouterProvider router = {router}/>
  
   </>
  );
}

export default App;
