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
                    <Link className="nav-link textColor-white" to="/accueil">Accueil</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/biographie">Me découvrir</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/projet">Projets</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    )
}

export default Nav;