import React from "react";
import './Navbar.css'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav className="nav__app"> 
    <div className="nav__app-logo">
    <img src={logo} alt="" />
    </div>
        <ul className="nav__app-links">
            <li><a href="Product">Product</a></li>
        <li><a href="Company">Company</a></li>
        <li><a href="Connect">Connect</a></li>
        </ul>
  <div className="auth">
             <button className="login">Login</button>
        <button className="signup">Sign Up</button>
        </div>      
     </nav>
  )
}
export default Navbar;