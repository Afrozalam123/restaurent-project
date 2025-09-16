import React from 'react'
import "../Global.css/About.css"
import Banner1 from "../Afroz/Banner1.jpg"
import Image0 from "../Afroz/Image0.jpg"
const Aboutus = () => {
  return (
    <div>
     <img src={Banner1} alt='Banner1' className='Banner'/>
     <div className="banr-cont">
       <h1>Welcome to About us</h1>
     <p>Welcome to Foodie<br/> where every meal is made with love and freshness.</p>
     <button className="btn-explore">Explore More</button>
     </div>

     <section>
      <div className="container1">
     <img src={Image0} alt="Image0" className="dish-img"/>
     <div className="containr-content">
      <h1>Our Story</h1>
      <p>Our journey began with a simple vision – to create a place where food brings  <br/> people together. What started as a small kitchen with a big dream has a<br/> now grown into a restaurant where every dish carries a story of passion and <br/> tradition. We believe that food is not just about taste, but about the love and <br/> memories that come with it.

Every recipe we serve is inspired by authentic <br/> flavors, crafted carefully with fresh ingredients, and served with warmth.</p>
      <button>Read more</button>
     </div>
      </div>
     </section>
    </div>
    
   
  )
}

export default Aboutus