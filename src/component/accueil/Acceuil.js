import React from 'react';
import Typical from "react-typical";


function Accueil (){
    return(
        <div className= "textAnime">
        <Typical
        steps={['Hello world!', 2000, 'Hello world!\n welcome in the homepage', 5000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>

    )
}


export default Accueil; 