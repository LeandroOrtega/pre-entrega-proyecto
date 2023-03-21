import CartWidget from "../CartWidget/CartWidget"
import styles from "./navbar.modules.scss"

const Navbar = () => {
  return (
    <div className="nav">
        <a className="nav_a">Damas</a>
        <a className="nav_a">Niños</a>
        <a className="nav_a">Hombres</a>
        <CartWidget/>
    </div>
  )
}

export default Navbar