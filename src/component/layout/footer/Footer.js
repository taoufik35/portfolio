
import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Footer(){
    return(
        <footer className= "bg-dark p-2 text-white text-center" >
            <p>Merci React js !</p>
            <FaFacebook /> < FaGithub /> < FaTwitter /> <  FaLinkedin/>

        </footer>
    );
}


export default Footer;