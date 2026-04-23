import React from "react";
import '../components/SecondHero.css'
import Pattern from '../images/Bg-pattern.PNG'
import Phones from '../images/illustration-phones.svg'


const SecondHero = () => {

 return ( <div>
<div className="SecondHero-container">
<div className="SecondHero-contents">
<div className="SecondHero-phonesimages">
    <img src={Phones} alt="" />
</div>
<div className="SecondHero-text">
   <h1>State of the Art Infrastructure</h1>
   <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p> 
</div>
 
 </div>



</div>
</div>);
 }


 export default SecondHero;