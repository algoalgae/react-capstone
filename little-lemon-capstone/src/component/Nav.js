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
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Reservations">Reservations</a></li>
                        <li><a href="#Order Online">Order Online</a></li>
                        <li><a href="#Login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav