import React from 'react'
// import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "../Global.css/Home.css"
import banner from "../Afroz/banner.jpg"
import Image21 from "../Afroz/Image21.jpg"
import Image15 from "../Afroz/Image15.jpg"
import Image20 from "../Afroz/Image20.jpg"
import Image22 from "../Afroz/Image22.jpg"
import Image24 from "../Afroz/Image24.jpg"
import Image25 from "../Afroz/Image25.jpg"
import Image26 from  "../Afroz/Imgae26.jpg"
import Image27 from "../Afroz/Image27.jpg"

const Home = () => {
  

  return (
  
    <div>
       <img src={banner} alt="banner-image" className="img-banner" loading='lazy '/>
   
      <div className="banner-content">
         <h1 className="heading">foodie</h1>
     <p className="pragraph">Freshly cooked meals, delivered hot and fast.<br/>
Taste happiness in every bite with Foodie.</p>
  <button id="btn">order now</button>
  
  
     </div>
      <section>
        <div className="healthy">
          <h2 className="health">Our special dishes</h2>
        </div>
        <section className="card-container">
         <div className="card">
         <img src={Image15} alt="image15" className="paner-img" loading="lazy"/>
         <h1>Shahipanner</h1>
         <p>"Rich & creamy tomato gravy with fresh paneer</p>
          <p className="price">price:₹180</p>
          <button id='add-cart'>Add to Cart</button>
         </div>
         <div className="card">
          <img src={Image20} alt="image20" loading="lazy"/>
          <h1>Chicken Roll</h1>
          <p>Juicy chicken wrapped in soft paratha with spicy chutney</p>
          <p className="price">price:₹120</p>
          <button id="add-cart">Add to cart</button>
         </div>
      
        <div className="card">
         <img src={Image21} alt="image21" className="rezala-img" loading="lazy"/>
         <h1>Shahi Chicken Rezala</h1>
         <p>Soft chicken cooked in creamy dahi and kaju gravy with mild Mughlai spices.</p>
         <p className="price">price:₹220-250</p>
         <button id='add-cart'>Add to cart</button>
        </div>

        <div className="card">
          <img src={Image22} alt="Image22" loading="lazy"/>
          <h1>Shahi chicken Biryani</h1>
          <p>Fragrant basmati rice layered with tender chicken, slow-cooked with saffron, aromatic spices</p>
          <p className="price">price:₹220</p>
          <button id='add-cart'>Add to cart</button>
          </div>
        
          <div className="card">
          <img src={Image24} alt="Image24" className="roti" loading="lazy"/>
           <h1>Special Butter Naan</h1>
           <p>Soft and fluffy Indian flatbread baked in a tandoor, brushed with fresh butter for a rich taste. Perfect to pair with any curry.</p>
           <p className="price">price:₹50 per piece</p>
           <button id='add-cart'>Add to cart</button>
          </div>
           <div className="card">
           <img src={Image25} alt="Image25" className="taste" loading="lazy"/>
            <h1>Sweet Firni</h1>
            <p>Special Firni is a rich and creamy Indian dessert made with ground rice, milk, and sugar, slow-cooked to perfection. Flavored with saffron and cardamom, and garnished with</p>
            <p className="price">price:₹50 per bowl</p>
            <button id='add-cart'>Add to cart</button>
           </div>

           <div className="card">
           <img src={Image26} alt="image26" className="tadka-img" loading="lazy"/>
           <h1>Special Tadka Dal</h1>
           <p>Tadka Dal is a comforting Indian dish made with yellow lentils, tempered with ghee, garlic, cumin, and spices. Its smoky aroma and rich flavor make it a perfect pair with rice or roti.</p>
           <p className="price">price:₹120 per bowl</p>
           <button id='add-cart'>Add to cart</button>
           </div>

           <div className="card">
            <img src={Image27} alt="Image27" className="curry-img" loading="lazy"/>
            <h1>Chicken Curry</h1>
            <p>A rich and flavorful curry slow-cooked with aromatic spices, creamy gravy, and tender pieces for a royal taste. Best enjoyed with naan or rice.</p>
            <p className="price">price:₹130 per bowl</p>
            <button id='add-cart'>Add to cart</button>
           </div>
          <section>
            <div>
            <h1 className="about-heading">About foodie</h1>
            <Link to="/aboutus">
             <button className='about-btn'>About us</button>
            </Link>
            </div>
         
          </section>
           
           
         </section>
      </section> 
     
     
    </div>
  )
}
export default Home