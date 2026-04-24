import React from "react";
import './Footer.css'
import logo from '../components/logo.svg'
const Footer = () => {
  return (
   <div className="Footer-container">
    <div className="Footer-contents">
    <div className="Footer-logo"></div>
    <img src={logo} className="Footer-image" alt="" />
    </div>
    <div className="Footer-list">
    <div className="Footer-product">
      <h1>Product</h1>
      <ul>
        <li>Overview</li>
        <li>Pricing</li>
        <li>Marketplace</li>
        <li>Features</li>
        <li>integrations</li>
      </ul>
    </div>
    <div className="Footer-company">
      <h1>Company</h1>
      <ul>
        <li>About</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="Footer-connect">
      <h1>Connect</h1>
      <ul>
        <li>Contact</li>
        <li>Newsletter</li>
        <li>Linkdin</li>
      </ul>
    </div>
    </div>
   </div>
  )
}
export default Footer;