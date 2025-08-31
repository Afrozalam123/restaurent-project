import { Link } from "react-router-dom";
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "../pages/Navbar.css"


// import required modules
// import { Navigation,Pagination } from 'swiper/modules';


// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import "../pages/Navbar.css"
import Logo from "../Afroz/Logo.jpg"
import banner from "../Afroz/banner.jpg"
export default function Home() {
  return (
     <div>
 <nav className="">
     <ul className="">
      
     <li><Link to="/aboutus" >Aboutus</Link> </li>
      <li><Link to="/contact" >Contact</Link> </li>
       <li><Link to="/menu" >Menu</Link> </li>
        <li><Link to="/login" >Login</Link>  </li>
     </ul>
    </nav>
   <section> 
    <img src={Logo} alt="logo" className="logo"/>
   </section>

   <section>
   
    <img src={banner} alt="banner-image" className="img-banner"/>
      <div className="banner-content">
         <h1 className="heading">foodie</h1>
     <p className="pragraph">Freshly cooked meals, delivered hot and fast.<br/>
Taste happiness in every bite with Foodie.</p>
  <button id="btn">order now</button>
      </div>
     <div>
      
     </div>
   </section>

  





  </div>
  )
}
 


 
    


    
  
 

