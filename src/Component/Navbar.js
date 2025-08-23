import { NavLink } from "react-router-dom";
import  "../pages/Navbar.css";
export default function Navbar() {
  return (
     <div>
 <nav className="sm:bg-amber-600   lg:bg-gray-400 ring-4">
     <ul className=" sm:text-red-950  ml-4 text-xl  p-4 flex  w-20 md:text-blue-900  outline-slate-600 md:text-xl lg:text-2xl m-40  cursor-pointer">
      <li> <NavLink to="/" end>Home</NavLink> </li>
     <li> <NavLink to="/aboutus">Aboutus</NavLink> </li>
      <li>  <NavLink to="/contact">Contact</NavLink> </li>
       <li>   <NavLink to="/menu">Menu</NavLink> </li>
        <li>    <NavLink to="/login">Login</NavLink>  </li>
     </ul>
      
    </nav>
   <section className="logo">
     <h1>Foodie</h1>
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

