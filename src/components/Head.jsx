import React from "react";
import './Head.css'
import Navbar from "./Navbar";


const Head = () => {
  return (
    <div className="head-container">
    <div className="head_container-navbar">
      <Navbar />
    </div>
    <div className="text-container">
      <h1> A modern publishing platform</h1>
      <p> Grow your audience and build your online brand</p>
      <div className="head-btn">
       <button className="head_container-text-btn">Start for Free</button>
       <button className="head_container-text-btn">Learn More</button>
      </div>
     </div>
      
</div>
  )
}
export default Head;