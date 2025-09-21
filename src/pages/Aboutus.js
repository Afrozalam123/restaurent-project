import React from 'react'
import "../Global.css/About.css"
import Banner1 from "../Afroz/Banner1.jpg"
import Image0 from "../Afroz/Image0.jpg"
import vision from "../Afroz/vision.jpg"
import mision from "../Afroz/mision.jpg"
import boys1 from "../Afroz/boys1.jpg"
import women from  "../Afroz/women.jpg"
import man from "../Afroz/man.jpg"
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
      <button id='read'>Read more</button>
     </div>
      </div>
      <section>
        <div className='our-vision'>
          <div className='vision-img'>
             <img src={vision} alt='vision-img'/>
          <div className='vsion-contents'>
          <h1>Our vision</h1>
          <p>"Our vision is to serve exceptional  food that creates <br/>
            memorable experiences, while building a welcoming <br/> space for every guest."</p>
         <div className='our-mision'>
          <div className='mision-img'>
             <img src={mision} alt='mision-jpg' className='mision-img'/>
          <div className='mision-heading'>
             <h1>our mision</h1>
          <p>Our mission is to serve our customers with quality <br/>
          , honesty, and passion, while creating memorable <br/>
           experiences that inspire trust and satisfaction</p>
           </div>
          </div>
         </div>
         </div>
        </div>
          </div>
      </section>
      <section>
      <div className='healthing'>
  <h1>What the people Think About us</h1>
  <div className='box'>
    <div className='box1'>
      <h2>Michel pattenson</h2>
      <h2>10:00pm</h2>
      <img src={boys1} alt='boys1' className='boys-img'/>
      
      <p className='heath'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> 
        Consectetur laudantium consequuntur expedita, reiciendis culpa quia et<br/> 
        necessitatibus nemo accusantium odit qui fugit!
      </p>
    </div>

    <div className='box1'>
      <h2>Alexa Bliss</h2>
        <h2>10:00pm</h2>
          <img src={women} alt='women.jpg' className='women-img'/>
        <p className='heath'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> 
        Consectetur laudantium consequuntur expedita, reiciendis culpa quia et<br/> 
        necessitatibus nemo accusantium odit qui fugit!
      </p>
    </div>

    <div className='box1'>
      <h2>Michael Jackson</h2>
        <h2>10:00pm</h2>
         <img src={man} alt='man-image' className='man-image'/>
           <p className='heath'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> 
        Consectetur laudantium consequuntur expedita, reiciendis culpa quia et<br/> 
        necessitatibus nemo accusantium odit qui fugit!
      </p>
    </div>
  </div>
</div>

       
       </section>
     </section>
    </div>
        
        
   
  )
}

export default Aboutus