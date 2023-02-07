import "./Nav.scss";
import menu from "../../assets/images/menu-burger.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={showMenu ? "nav__show" : "nav"}>
            <img src={menu} alt="menu" className="nav__icon" onClick={toggleMenu}/>
            {showMenu && <div className="nav__links">
                <NavLink to={"/"} className="nav__links--link">Weather App</NavLink>
                <NavLink to={"/quiz"} className="nav__links--link">Quiz</NavLink>
                <NavLink to={"/football"} className="nav__links--link">Football Team Organiser</NavLink>
            </div>}
        </div>
    )
}

export default Nav;