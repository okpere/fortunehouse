// App.js
import React from "react";

import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import "./App.css";
import Partner from "./components/Partner";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Partner />
      <About />
      <Footer />
    </div>
  );
}

export default App;
