import React from 'react';
import Typical from "react-typical";
import Files from "./files"


function Projet (){
    return(
      <div>
        <div className= "textAnime">
        <Typical
        steps={['Welcome in the project page', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
      
        <div className="content">
          <Files/>
        </div>
      </div>  
    )
}



export default Projet; 

