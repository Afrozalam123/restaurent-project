import { NavLink } from "react-router-dom";
import  "../pages/Navbar.css";
export default function Navbar() {
  return (
     <div>
     

 <nav className="  sm:bg-amber-600   lg:bg-gray-400 ring-4">
     <ul className=" sm:text-red-950 text-xs ml-44 p-8   flex relative  w-20 md:text-blue-900  outline-slate-600 md:text-xl    lg:text-2xl mix-blend-overlay">
       <NavLink to="/" end>Home</NavLink> 
   <NavLink to="/aboutus">Aboutus</NavLink> 
        <NavLink to="/contact">Contact</NavLink> 
         <NavLink to="/menu">Menu</NavLink> 
            <NavLink to="/login">Login</NavLink>  
     </ul>
      
    </nav>



   <section className="logo">
     <h1>Foodie</h1>
   </section>

    </div>
     
     

     
  );
}

