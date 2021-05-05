import {Link} from "react-router-dom";
import logoNav from './logoNav.png'

function Nav(){
    return(
        
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className = "container">
            <img className="himage" src={logoNav} alt="picture nav " />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link textColor-white" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Me découvrir</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Projets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    )
}

export default Nav;