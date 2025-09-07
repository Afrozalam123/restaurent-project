import { Link } from "react-router-dom";
import "../Global.css/Navbar.css"
import Logo from "../Afroz/Logo.jpg"
export default function Home() {
  return (
     <div>
 <nav>
     <ul>

      <li><Link to="/">Home</Link></li>
     <li><Link to="/aboutus" >Aboutus</Link> </li>
      <li><Link to="/contact" >Contact</Link> </li>
       <li><Link to="/menu" >Menu</Link> </li>
        <li><Link to="/login" >Login</Link>  </li>
     </ul>
    </nav>
   <section> 
    <img src={Logo} alt="logo" className="logo"/>
   </section>
   
   
    </div>
  )
}