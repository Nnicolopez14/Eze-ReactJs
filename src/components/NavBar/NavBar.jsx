import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <h1>Kloudd</h1>
            </div>

            <ul className="categories">
                <li>Pantalones</li>
                <li>Remera</li>
                <li>Buzos</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar