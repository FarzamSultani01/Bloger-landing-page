import React , {useState} from "react";
import './Navbar.css'
import logo from './logo.svg'
import arrow from '../images/icon-arrow-light.svg'
import Hamburger from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="nav__app"> 
    <div className="nav__app-logo">
    <img src={logo} alt="" />
    </div>
        <ul className="nav__app-links">
         <li onClick={() => toggleMenu("product")}><a href="Product">Product <img src= {arrow} alt="" /></a></li>
        <li><a href="Company">Company <img src= {arrow} alt="" /></a></li>
        <li><a href="Connect">Connect <img src= {arrow} alt="" /></a></li>
        </ul>
        <ul className="nav__app-links">
        <li onClick={() => toggleMenu("product")}>
          <a href="#">Product <img src={arrow} alt="" /></a>
          {openMenu === "product" && (
            <ul className="dropdown">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Marketplace</a></li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu("company")}>
          <a href="#">Company <img src={arrow} alt="" /></a>
          {openMenu === "company" && (
            <ul className="dropdown">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu("connect")}>
          <a href="#">Connect <img src={arrow} alt="" /></a>
          {openMenu === "connect" && (
            <ul className="dropdown">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          )}
        </li>
      </ul>
  <div className="auth">
             <button className="login">Login</button>
        <button className="signup">Sign Up</button>
        </div>   
        <div className="app__navbar-smallscreen">
          <img src={Hamburger} alt="pic" onClick={() => {}} />
          <div className="app__navbar-smallscreen_overlay" >
            <img src={Close} alt="" onClick={()=>{}} className="overlay__close"/>
          <ul className="app__navbar-smallscreen-links">
              <li><a href="Product">Product <img src= {arrow} alt="" /></a></li>
              <li><a href="Company">Company <img src= {arrow} alt="" /></a></li>
              <li><a href="Connect">Connect <img src= {arrow} alt="" /></a></li>
          </ul>
          </div>
          </div>   
     </nav>
  )
}
export default Navbar;