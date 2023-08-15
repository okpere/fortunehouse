// components/Header.js
import React from "react";
import logo from "../../assets/logo2.png";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="FHNlogo" width="120" height="60" />
        <ul className="header-list">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="intro" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
        </ul>
      <div className="header-button">
        <button to="about" smooth={true} duration={500}>Contact</button>
      </div>
    </header>
  );
}

export default Header;
