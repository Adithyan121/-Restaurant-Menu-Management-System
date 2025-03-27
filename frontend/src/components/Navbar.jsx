import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../css/navbar.css";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    // Toggle Menu
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false); 

    return (
        <nav className="navbar">
            <div className="logo1">
                <img src={logo} alt="logo" />
                <h2 className="company-name">
                    DEEP <span>NET</span> SOFT
                </h2>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Links */}
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/menu" onClick={closeMenu} className={location.pathname === "/menu" ? "active" : ""}>Menu</Link></li>
                <li><Link to="/admin" onClick={closeMenu} className={location.pathname === "/reservation" ? "active" : ""}>Make a Reservation</Link></li>
                <li><Link to="/contact" onClick={closeMenu} className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
