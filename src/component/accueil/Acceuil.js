import React from 'react';
import Typical from "react-typical";
import Competences from './compentences/Competence';


function Accueil (){
    return(
      <div>
          <div className= "textAnime">
          <Typical
          steps={['Hello!!', 2000, 'Hello!! Welcome in the homepage', 5000]}
          loop={Infinity}
          wrapper="p"
        />
          </div>

          <div className="competence">
          
         <h1>Compétences</h1>
    
            <Competences/>
          </div>
    </div>
    )
}


export default Accueil; 