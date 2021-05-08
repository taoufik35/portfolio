import React from 'react';
import Typical from "react-typical";
import Gmail from "./Gmail.png";


function Contact (){
    return(

      <div>
        <div className= "textAnime text-center">
        <Typical
        steps={['Welcome in the contact page', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
        
        <div className= "iconSend">
        <h1>
            Contact
        </h1>
        <div className= "containe">
        <p>
          N'hésitez pas à me contacter en m'envoyant un mail<br/> Pour tout projet professionnel ou toutes autres informations<br/> en cliquant sur l'enveloppe.<br/> 
          Á trés vite :-) !!! 
        </p>
        <a href="mailto:voutib@gmail.com"><img src={Gmail} alt="iconesend"/></a>
        
        </div>
        </div>

      </div>
    )
}



export default Contact; 