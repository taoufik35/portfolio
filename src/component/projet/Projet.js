import React from 'react';
import Typical from "react-typical";

import Article from "./article/Article";


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
      
        <div className="content ">
          <h1>Projets de formation</h1>
          <Article />
        </div>
      </div>  
    )
}



export default Projet; 

