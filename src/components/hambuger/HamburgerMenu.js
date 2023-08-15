import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`line ${isOpen ? "open" : ""}`} />
        <span className={`line ${isOpen ? "open" : ""}`} />
        <span className={`line ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && <div className="menu-overlay" />}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
