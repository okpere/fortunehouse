// components/About.js
import React from "react";
import logo from "../assets/logo2.png";

function About() {
  return (
    <section className="About" id="about-us">
      <div className="About-contact">
        <h2>Contact Us</h2>
        <p>
          Have Any Question? <span>Reach out to us</span>
        </p>
      </div>
      <div className="about-detail">
        <img src={logo} width="200px" />
        <div>
          <p id="contact-us">Contact Us</p>
          <ul>
            <li>+2347058484042</li>
            <li>+2349166228994</li>
            <li>Support@wajegames.com</li>
            <li>FCT Abuja, Nigeria </li>
            <li>1 Kandi Close, off Aminu Kano Crescent, Wuse II FCT Abuja</li>
          </ul>
        </div>
        <div>
          <p>Our Services</p>
          <ul>
            <li>Gaming</li>
            <li>Advertising</li>
            <li>Digital Strategy</li>
            <li>Socail marketing</li>
            <li>planning and management</li>
          </ul>
        </div>
      </div>
      <div className="Footer" id="footer">
      <hr />
      <span>&copy; 2023 Fortune House Network. All rights reserved.</span>
    </div>
    </section>
  );
}

export default About;
