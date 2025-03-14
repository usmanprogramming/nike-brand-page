import React, { useState } from "react";
import "../styles/navbar.css";
import brand_page from "../assets/brand_logo.webp";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo-div">
          <img src={brand_page} alt="Brand Logo" />
        </div>
        <div className={`menu-div ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="login-btn-div">
          <button>Login</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <CiMenuBurger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
