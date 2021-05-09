
import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Footer(){
    return(
        <footer className= "bg-dark p-2 text-white text-center" >
            <p>Merci React js !</p>

            <div className ="icone">
                <div className ="social">
                    <a 
                    href ="https://www.facebook.com/taoufik.aitdra/">
                    <FaFacebook size = "4em" color= "darkblue" />
                    </a>

                </div>

                <div className ="social">

                <a href="https://github.com/taoufik35">
                < FaGithub  size = "4em" color = "black" /> 
                </a>

                </div>

                <div className ="social">

                <a href= "https://twitter.com/TaoufikDra">
                < FaTwitter  size = "4em" />
                </a>

                </div>

                <div className ="social">
                <a href= "https://www.linkedin.com/in/ait-dra-taoufik-b23173207/">
                < FaLinkedin  size = "4em"/>
                </a>

                </div>

            </div>
        </footer>
    );
}


export default Footer;