import React from 'react'
import "../Global.css/About.css"
import Banner1 from "../Afroz/Banner1.jpg"
import Image0 from "../Afroz/Image0.jpg"
import vision from "../Afroz/vision.jpg"
import mision from "../Afroz/mision.jpg"
import boys1 from "../Afroz/boys1.jpg"
import women from "../Afroz/women.jpg"
import man from "../Afroz/man.jpg"
import ceo from  "../Afroz/ceo.jpg"
import Laxmi from "../Afroz/Laxmi.jpg"
import Rahul from "../Afroz/Rahul.jpg"
import vikash from "../Afroz/vikash.jpg"
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div>
      {/* Banner Section */}
      <img src={Banner1} alt='Banner1' className='Banner'/>
      <div className="banr-cont">
        <h1>Welcome to About us</h1>
        <p>Welcome to Foodie<br/> where every meal is made with love and freshness.</p>
        <button className="btn-explore">Explore More</button>
      </div>

      {/* Story Section */}
      <section>
        <div className="container1">
          <img src={Image0} alt="Image0" className="dish-img"/>
          <div className="containr-content">
            <h1>Our Story</h1>
            <p>
              Our journey began with a simple vision – to create a place where food brings <br/> 
              people together. What started as a small kitchen with a big dream has now <br/>
              grown into a restaurant where every dish carries a story of passion and tradition. <br/>
              We believe that food is not just about taste, but about the love and memories <br/>
              that come with it. Every recipe we serve is inspired by authentic flavors, <br/>
              crafted carefully with fresh ingredients, and served with warmth.
            </p>
            <button id='read'>Read more</button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section>
        <div className='our-vision'>
          <div className='vision-img'>
            <img src={vision} alt='vision-img'/>
            <div className='vsion-contents'>
              <h1>Our Vision</h1>
              <p>
                "Our vision is to serve exceptional food that creates <br/>
                memorable experiences, while building a welcoming <br/> 
                space for every guest."
              </p>
            </div>
          </div>

          <div className='our-mision'>
            <div className='mision-img'>
              <img src={mision} alt='mision' className='mision-img'/>
              <div className='mision-heading'>
                <h1>Our Mission</h1>
                <p>
                  Our mission is to serve our customers with quality, <br/>
                  honesty, and passion, while creating memorable <br/>
                  experiences that inspire trust and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className='healthing'>
          <h1>What the people Think About us</h1>
          <div className='box'>
            
            <div className='box1'>
              <h2>Michel Pattenson</h2>
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
              <img src={women} alt='women' className='women-img'/>
              <p className='heath'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                Consectetur laudantium consequuntur expedita, reiciendis culpa quia et<br/> 
                necessitatibus nemo accusantium odit qui fugit!
              </p>
            </div>

            <div className='box1'>
              <h2>Michael Jackson</h2>
              <h2>10:00pm</h2>
              <img src={man} alt='man' className='man-image'/>
              <p className='heath'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                Consectetur laudantium consequuntur expedita, reiciendis culpa quia et<br/> 
                necessitatibus nemo accusantium odit qui fugit!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
        
        

          {/* Heading part */}
          <div className="uper-head">
            <h1>Meet our Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ipsa? Voluptatibus modi voluptas.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo consequuntur aut eligendi nesciunt asperiores cum possimus minima.</p>
          </div>


           {/* TEAM SECTION */}
          <section>
         <div className='TEAM1'>
  <div className="team">
    <div className="member">
      <img src={ceo} alt='ceo-img' loading='lazy' className='ceo-img'/>
      <h1>Rahul Kumar</h1>
      <p>Founder / CEO</p>
    </div>
  </div>

  <div className="team">
    <div className="member">
      <img src={Rahul} alt='rahul-img' loading='lazy' className='Rahul-img'/>
      <h1>Shahnawaz Alam</h1>
      <p>Frontend Developer</p>
    </div>
  </div>

  <div className="team">
    <div className="member">
      <img src={vikash} alt='vikash-image' className='vikash-img' loading='lazy'/>
      <h1>Vikas Kumar</h1>
      <p>Backend Developer</p>
    </div>
  </div>

  <div className="team">
    <div className="member">
      <img src={Laxmi} alt='laxmi-image' loading='lazy' className='laxmi-img'/>
      <h1>Laxmi Kumari</h1>
      <p>Designer</p>
    </div>
  </div>
</div>
 </section>
  <div>
    <h1>our menu</h1>
    <Link to="/menu">
    <button>our menu</button>
    </Link>
  </div>
  </div>
 
      
      




           
          
       
         
           

           
           
  
   
  )
  }
export default Aboutus
