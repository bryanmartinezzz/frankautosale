import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar(){
    return <nav className = "navbar">
        <div className = "navbar-brand">
            <Link to ="/">Frank Autosale</Link>
        </div>
        <div className = "navbar-links">
            <Link to = "./" className = "nav-link">Home</Link>
            <Link to = "./pages/About" className = "nav-link">About</Link>
            <Link to = "./pages/Contact" className ="nav-link">Contact</Link>
        </div>

    </nav>
}

export default Navbar