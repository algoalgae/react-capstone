import logo from "./../assets/images/Logo.svg"
import "./../assets/css/nav.css"

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><img src={logo} alt="logo"/></li>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">RESERVATIONS</a></li>
                <li><a href="">ORDER ONLINE</a></li>
                <li><a href="">LOGIN</a></li>
            </ul>
        </nav>
    )
}

export default Nav