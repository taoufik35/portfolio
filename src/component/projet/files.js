import data from "./data.json";
import terre from "./terre.png";
import norimmo from "./norimmo.png";
import jeu from "./jeu.png";
import banque from "./banque.png";
import { Component } from 'react';
import Article from "./article/Article";

var filesList = data.files;

class Files extends Component{
        
  render(){
    return(
     function(){   
       Object.keys(filesList).map((index, value) => {
           console.log(filesList)
          return <Article  index ={index} value ={value}/>
           
      }
       )
  }  
    )
  }



}

export default Files;