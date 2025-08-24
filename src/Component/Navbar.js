import { Link } from "react-router-dom";
import  "../pages/Navbar.css";
export default function Navbar() {
  return (
     <div>
 <nav className="sm:h-7">
     <ul className="" >
      <li><Link to="/home" >Home</Link></li>
     <li><Link to="/aboutus" >Aboutus</Link> </li>
      <li><Link to="/contact" >Contact</Link> </li>
       <li><Link to="/menu" >Menu</Link> </li>
        <li><Link to="/login" >Login</Link>  </li>
     </ul>
    </nav>
   <section> 
   <h1 className="logo">Foodie</h1>
   </section>

    <section className="icon">
    <i class="fa-solid fa-magnifying-glass"></i>
   </section>
   <div className="cart-container">
    <i class="fa-solid fa-cart-shopping "></i>
    <div className="cart-dropdown">
     <h1>Cart Empty</h1>
     <p>Good food is always cooking! Go ahead, order some yummy items from the menu</p>
    </div>
   </div>
    


    
</div>
  
     
  );
}

