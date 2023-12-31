import React from "react";
import Card from "../card/Card";
import bulb from "../../assets/bulb.svg";
import game from "../../assets/game.svg";
import './intro.css'

const Intro = () => {
  const cardStyle ={
    maxWidth:'380px',
  }
  return (
    <section className="intro" id="intro">
      <div className="intro-detail">
        <h3>Introduction to The Leading </h3>
        <span>Digital advertising agency.</span>
        <p>
          We are a leading ad agency specializing in providing innovative and
          effective marketing solutions to businesses of all sizes. With our
          expertise and creativity, we help our clients achieve their marketing
          goals and stand out from the competition.
        </p>
        <p>
          As a game company we dedicated to providing the most unique gameing
          experience for local Nigeria players.with our flagship games,and other
          products.
        </p>

        <button>Hire Us</button>
      </div>
      <div className="intro-card">
        <Card style={cardStyle}>
          <img src={bulb} />
          <p>Digital Strategy</p>
          <span>
            plan for maximizing the business benefits of data assets and
            technology-focused initiatives
          </span>
        </Card>
        <Card style={cardStyle}>
          <img src={game} />
          <p>Media Buying and Planning</p>
          <span>
            plan for maximizing the business benefits of data assets and
            technology-focused initiatives
          </span>
        </Card>
      </div>
    </section>
  );
};

export default Intro;
