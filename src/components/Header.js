// components/Header.js
import React from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-scroll";
function Header() {
  return (
    <header className="App-header">
      <div className="header-logo">
        <img src={logo} alt="FHNlogo" width="150" height="80" />
      </div>
      <div className="header-list">
        <ul>
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
            <Link to="about-us" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-button">
        <button>Contact</button>
      </div>
    </header>
  );
}

export default Header;
