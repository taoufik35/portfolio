
import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Footer(){
    return(
        <footer className= "bg-dark p-2 text-white text-center" >
            <p>Merci de votre visite et à bientôt !!</p>

            <div className ="icone">
                <div className ="social">
                    <a 
                    href ="https://www.facebook.com/taoufik.aitdra/" target="_blank">
                    <FaFacebook size = "2em" color= "darkblue" />
                    </a>

                </div>

                <div className ="social">

                <a href="https://github.com/taoufik35"target="_blank" >
                < FaGithub  size = "2em" color = "black" /> 
                </a>

                </div>

                <div className ="social">

                <a href= "https://twitter.com/TaoufikDra" target="_blank">
                < FaTwitter  size = "2em" />
                </a>

                </div>

                <div className ="social">
                <a href= "https://www.linkedin.com/in/ait-dra-taoufik-b23173207/" target="_blank">
                < FaLinkedin  size = "2em"/>
                </a>

                </div>

            </div>
        </footer>
    );
}


export default Footer;