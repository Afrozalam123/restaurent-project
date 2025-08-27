import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../pages/Navbar.css"


// import required modules
import { Navigation,Pagination } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import "../pages/Navbar.css"
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
   <h1 className="logo sm:text-yellow-300 text-2xl md:text-white ">Foodie</h1>
   </section>


    <section>
       <div className='container'>
      <Swiper navigation={true} modules={[Navigation,Pagination]} className="mySwiper" slidesperview={2} spacebetween={20} style={{
        "--swiper-navigation-color":"green",
        "--swiper-navigation-size":"3rem",
          "--swiper-pagination-bullet-size":"1rem",
          
      }} pagination={true}>
        <SwiperSlide><div className='slide   slide1'></div></SwiperSlide>
         <SwiperSlide><div className='slide   slide2'></div></SwiperSlide>
         <SwiperSlide><div className='slide   slide3'></div></SwiperSlide>
         <SwiperSlide><div className='slide   slide4'></div></SwiperSlide>
          <SwiperSlide><div className='slide   slide4'></div></SwiperSlide>
         </Swiper>
       </div>
    </section>
      
    
 


   </div>
    


    
  
 

  )
  }
