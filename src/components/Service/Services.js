// components/Services.js
import React from "react";
import Card from "../card/Card";
import brain from "../../assets/bulb.svg";
import './Service.css'

function Services() {
  // Define multiple styles as objects
  const cardStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(240, 63, 249, 0.737)",
    // Add more styles as needed
  };
  return (
    <section className="Services" id="services">
      <div className="service-detail">
        <h3>
          What more do we <span>Offer</span>
        </h3>
        <hr />
        <p>
          Our Leading <span>Gaming Service!!</span>
        </p>
        <div className="service-detail-expain">
          <span>
            Fortune House Network is becoming one of the most stable and
            reliable advertising agencies and leading gaming companies in
            Nigeria. We firmly believe there will be more business partners
            willing to cooperate with us in promoting the further development of
            the local gaming and advertising industry in Nigeria.
          </span>
        </div>
      </div>
      <div className="service-card">
        <Card style={cardStyle}>
          <img src={brain} />
          <p>Waje Games</p>
          <span>
            As a game company dedicated to providing the most unique gaming
            experience for local Nigerian players. Our flagship game, Whot, and
            many more
          </span>
        </Card>
        <Card style={cardStyle}>
          <img src={brain} />
          <p>Advertising agency</p>
          <span>
            As an advertising agency, we have an experienced team dedicated to
            providing clients with comprehensive services. We have established
            good relationships with multiple social media platforms such as
            Google, Facebook, Twitter, and offer the best advertising solutions
            for our clients.
          </span>
        </Card>
      </div>
    </section>
  );
}

export default Services;
