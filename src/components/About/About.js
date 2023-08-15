// components/About.js
import React from "react";
import logo from "../../assets/logo.png";
import "./About.css";

function About() {
  return (
    <section className="About" id="about-us">
      <h2>Contact Us</h2>
      <p>
        Have Any Question? <span>Reach out to us</span>
      </p>
      <div className="about-detail">
        <div>
          <img className="logo" src={logo} width="150px" />
        </div>
        <div className="service">
          <p>Our Services</p>
          <ul>
            <li>Gaming</li>
            <li>Advertising</li>
            <li>Digital Strategy</li>
            <li>Socail marketing</li>
            <li>planning and management</li>
          </ul>
        </div>
        <div className="contact">
          <p id="contact-us">Contact Us</p>
          <ul>
            <li>+2347058484042</li>
            <li>+2349166228994</li>
            <li>Support@wajegames.com</li>
            <li>FCT Abuja, Nigeria </li>
            <li>1 Kandi Close, off Aminu Kano Crescent, Wuse II FCT Abuja</li>
          </ul>
        </div>
        {/* <div className="contact">
          <p id="contact-us">Contact Us</p>
          <ul>
            <li>0731222365</li>
            <li>00606</li>
            <li>P.O Box :1641,</li>
            <li>Milele Center,off namanga,road</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default About;
