import React from 'react';
import Typical from "react-typical";
import Gmail from "./Gmail.png";


function Contact (){
    return(

      <div>
        <div className= "textAnime">
        <Typical
        steps={['welcome in the contact page', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
        
        <div className= "iconSend">
        <h1>
            Contact
        </h1>
        <div className= "containe">
        <a href="mailto:voutib@gmail.com"><img src={Gmail} alt="iconesend"/></a>
        
        <p>
          Pour tout projet professionnel<br/> n'hesiter pas a me contacter en m'envoyant un mail<br/> en cliquant sur l'enveloppe.<br/> 
          Á trés vite :-) !!! 
        </p>
        </div>
        </div>

      </div>
    )
}



export default Contact; 