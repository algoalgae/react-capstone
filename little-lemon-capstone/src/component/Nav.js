import  {Link} from 'react-router-dom';
import logo from "./../assets/images/Logo.svg"
import './../assets/css/layout.css';
import './../component/Hamberger.js'

function Nav() {
    return (
        <header className="site-header" role="banner">
            <div className="container bar">
                <a href="/" className="logo" aria-label="Home">
                    <img src={logo} alt="logo"/>
                </a>

                <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Open menu">
                    <span class="hamburger"></span>
                </button>

                <nav className="nav" aria-label="Main">
                    <ul>
                        <li><a><Link to="/">Home</Link></a></li>
                        <li><a><Link to="/about">About</Link></a></li>
                        <li><a><Link to="/main">Menu</Link></a></li>
                        <li><a><Link to="/reservation">Reservation</Link></a></li>
                        <li><a><Link to="/main">Order Online</Link></a></li>
                        <li><a><Link to="/">Login</Link></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav