import React from "react";
import '../components/ThirdHero.css'
import ComImage from '../images/illustration-laptop-desktop.svg'
import ComImageMob from '../images/illustration-laptop-mobile.svg'
import circle from "../images/bg-pattern-circles.svg"



const ThirdHero = () => {

 return ( 
 <div className="ThirdHero-container">
    <div className="ThirdHero-images">
    <img className="ComImage" src={ComImage} alt="" />
    <img className="ComImageMobile" src={ComImageMob} alt="" />
    </div>
    <div className="ThirdHero-text">
    <div className="First-text">
        <h1>Free, open, simple</h1>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
    </div>
    <div className="Second-text">
        <h1>Powerful tooling</h1>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
    </div>
    </div>
</div>);
 }


 export default ThirdHero;