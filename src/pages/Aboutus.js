import React from 'react'
import "../Global.css/About.css"
import Banner1 from "../Afroz/Banner1.jpg"
const Aboutus = () => {
  return (
    <div>
     <img src={Banner1} alt='Banner1' className='Banner'/>
     <div className="banr-cont">
       <h1>Welcome to About us</h1>
     <p>Welcome to Foodie<br/> where every meal is made with love and freshness.</p>
     <button className="btn-explore">Explore More</button>
     </div>
    </div>
  )
}

export default Aboutus