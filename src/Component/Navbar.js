import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../pages/Navbar.css"
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
       <div className="box1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='slide Slide1'></div>Slide 1</SwiperSlide>
        <SwiperSlide><div className='slide Slide2'></div>Slide 2</SwiperSlide>
        <SwiperSlide><div className='slide Slide3'></div>Slide 3</SwiperSlide>
        <SwiperSlide><div className='slide Slide4'></div>Slide 4</SwiperSlide>
        </Swiper>
       </div>
    </section>
      
    
 


   </div>
    


    
  
 

  )
  }
