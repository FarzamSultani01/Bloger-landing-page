import React from "react";
import './Hero.css'
import computer from "../images/illustration-editor-desktop.svg"
import compmob from "../images/illustration-editor-mobile.svg"
import circle from "../images/bg-pattern-circles.svg"


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-head">
    <h1>Designed fot the future</h1>
      </div>
      <div className="hero-mobile-image">
        <img src={compmob} alt="" />
      </div>
      <div className="hero-container-component">
        <div className="hero-container-component-left">
        <div className="hero-text">
          <h2>Introducing an extensible editor</h2>
          <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog</p>
        </div>
        <div className="hero-text">
          <h2>Robust content management</h2>
          <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
        </div>
        </div>
        <div className="hero-computer-image">
          <img src={computer} alt="" />
        </div>
      </div>
     
      
    </div>
  )
}
export default Hero;