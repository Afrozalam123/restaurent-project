import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../pages/Navbar.css"


// import required modules
import { Navigation, Pagination } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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
     

     <section  className="slider-section">
      <div className="container">
        <Swiper 
        navigation={true} 
        modules={[Navigation,Pagination]} 
        className="mySwiper"
        style={{
          "--swiper-navigation-color":"red",
          "--swiper-navigation-size":"1rem",
          "--swiper-pagination-bullet-size":"1rem",
           

        }}pagination={{clickable:true}}
         
         breakpoints={{
        // Mobile (sm)
        0: {
          direction: "vertical",
          slidesPerView: 1,
          navigation: false,
          mousewheel: true,
          pagination: { clickable: true },
        },
        // Tablet (md)
        768: {
          direction: "horizontal",
          // slidesPerView: 2,
          navigation: true,
        },
        // / Desktop (lg)
        1024: {
          direction: "horizontal",
          slidesPerView: 1,
          navigation: true,
        },
      }}
    >
         
        <SwiperSlide><div className="slide  Slide1"></div></SwiperSlide>
        <SwiperSlide><div className="slide  Slide2"></div></SwiperSlide>
        <SwiperSlide><div className="slide  Slide3"></div></SwiperSlide>
        <SwiperSlide><div className="slide  Slide4"></div></SwiperSlide>
         <SwiperSlide><div className="slide  Slide5"></div></SwiperSlide>
        <SwiperSlide><div className="slide  Slide6"></div></SwiperSlide>
      
      </Swiper>
    
      </div>
  


     </section>
   </section>

  





  </div>
  )
}
 


 
    


    
  
 

