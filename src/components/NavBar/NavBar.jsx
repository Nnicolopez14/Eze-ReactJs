import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
            <h1>Kloudd</h1>
            </Link>

            <ul className="categories">
                <li className="category">
                    <NavLink to="/category/pantalones" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Pantalones</NavLink>
                </li>
                <li className="category">
                    <NavLink to="/category/remeras" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Remeras</NavLink>
                </li>
                <li className="category">
                    <NavLink to="/category/buzos" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Buzos</NavLink>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar