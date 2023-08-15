// App.js
import React from "react";
import Header from "./components/Header/Header";
import Services from "./components/Service/Services";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Partner />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
