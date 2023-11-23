import React from "react";
import "../styles/navbar.css"
import brand_page from "../assets/brand_logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo-div">
          <img src={brand_page} />
        </div>
        <div className="menu-div">
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
      </nav>
    </div>
  );
};

export default Navbar;
