
import React, { useState } from "react";
import './Navbar.css';
import logo from './logo.svg';
import arrow from '../images/icon-arrow-light.svg';
import Hamburger from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';
import arrowDark from '../images/icon-arrow-dark.svg';

const NAV_ITEMS =[ 
  {
    lable: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
  },
  {
    lable: "Company",
    links: ["About", "Team", "Blog", "Careers"]
  },
  {
    lable: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"]
  }
]

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  
  return (
    <nav className="nav__app"> 
      <div className="nav__app-logo">
        <img className="app__logo-bl" src={logo} alt="logo" />
      </div>

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
        <img src={Hamburger} alt="menu" onClick={() => setHamburgerMenu(true)} />
        {hamburgerMenu && (
          <div className="app__navbar-smallscreen_overlay">
             <div className="nav__app-logo-smallscreen">
        <img className="logo__smallscreen" src={logo} alt="logo" />
      </div>
            <img src={Close}  alt="close" onClick={() => setHamburgerMenu(false)} className="overlay__close"/>
            <ul className="app__navbar-smallscreen-links">
              <li onClick={()=>toggleMenu("product")}><a href="#">Product <img src={arrowDark} alt="" /></a>
              {openMenu === "product" && (
            <ul className="dropdown dropdown-smallscreen">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Marketplace</a></li>
            </ul>
              )}
              </li>
              
              <li onClick={()=> toggleMenu("company")}><a href="#">Company<img src={arrowDark} alt="" /></a>
              {openMenu === "company" && (
              <ul className="dropdown dropdown-smallscreen">
               <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              </ul>
              )}
              </li>
              <li onClick={()=> toggleMenu("connect")}><a href="#">Connect<img src={arrowDark} alt="" /></a>
              {openMenu === "connect" && (
              <ul className="dropdown dropdown-smallscreen">  
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
                </ul>
                  )}
              
              </li>
              
              <div className="auth__smallscreen">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
              </div> 
            </ul>
          </div>
        )}
      </div>   
    </nav>
  );
};

export default Navbar;
