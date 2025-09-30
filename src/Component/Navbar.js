import { Link } from "react-router-dom";
import "../Global.css/Navbar.css"
import Logo from "../Afroz/Logo.jpg"
export default function Navbar() {
  return (
     <div>
 <nav>
     <ul>
      <li><Link to="/home" className="nav-list">Home</Link></li>
     <li><Link to="/aboutus" className="nav-list">Aboutus</Link></li>
       <li><Link to="/menu"  className="nav-list">Menu</Link></li>
        <li><Link to="/login" className="nav-list" >Login</Link></li>
        <li><Link to="/signin" className="nav-list" >Signin</Link></li>
     </ul>
    </nav>
   <section> 
    <img src={Logo} alt="logo" className="logo" loading="lazy"/>
   </section>
   <section>
    <div className="icon">

    </div>
   </section>
   </div>
  )
}
