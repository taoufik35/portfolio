import React from 'react';
import Typical from "react-typical";

function Projet (){
    return(
        <div className= "textAnime">
        <Typical
        steps={['Welcome in the project page', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
    )
}



export default Projet; 