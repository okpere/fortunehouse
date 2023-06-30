// App.js
import React from "react";

import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import "./App.css";
import Partner from "./components/Partner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Partner />
      <About />
    </div>
  );
}

export default App;
