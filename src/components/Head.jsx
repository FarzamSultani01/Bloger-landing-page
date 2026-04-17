import React from "react";
import './Head.css'
import Navbar from "./Navbar";


const Head = () => {
  return (
    <div className="head-container">
      <Navbar />
      
        <h1>Welcome to Our Blog</h1>
        <p>Discover the latest news, insights, and stories from our team.</p>
    </div>
  )
}
export default Head;