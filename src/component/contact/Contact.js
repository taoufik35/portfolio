import React from 'react';
import Typical from "react-typical";


function Contact (){
    return(
        <div className= "textAnime">
        <Typical
        steps={['welcome in the contact page', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
    )
}



export default Contact; 