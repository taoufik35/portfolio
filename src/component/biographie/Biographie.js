import React from 'react';
import Typical from "react-typical";

function Biographie (){
    return(
        <div className= "textAnime">
        <Typical
        steps={[ 'welcome in my biography page', 2000]}
        loop={Infinity}
        wrapper="p"
      />
        </div>
    )
}



export default Biographie; 