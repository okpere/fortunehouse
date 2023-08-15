import React from "react";
import heroimg from "../../assets/heroimg.svg";
import { Link } from "react-scroll";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroimg})` }}>
      <div className="hero-intro">
        <h1>
          Welcome To
          <span> Fortune House Network</span>
        </h1>
        <h2>Transform Your Business with Digital Market Play</h2>
        <p>
          Fortune House network is a local Nigeria gaming and advertising
          agency,we are becoming one of the most stable and reliable advertising
          and largest gaming company in nigeria
        </p>
      </div>
      <div className="hero-button">
        <Link to="contact-us" smooth={true} duration={500}>
          <button>Contact Us</button>
        </Link>
        <Link to="intro" smooth={true} duration={500}>
          <button>About Us</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
