import React from "react";
import header from './header.jpg';
 


function Header() {
  // Import result is the URL of your image
  return(
    <div>
   <img className="headimage" src={header} alt="header" />
   </div>
  
  );
}

export default Header;