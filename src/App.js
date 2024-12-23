import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import Hero from "./components/hero/Hero";
import Particles from "./components/particles/Particles";
import Skills from "./components/pages/Skills";
import Footer from "./components/footer/Footer";
import Gototop from "./components/footer/Gototop";

function App() {
  return (
    <div className="font-serif App">
    <Router>
        <Particles />
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <About />
        <Contact />
        <Gototop/>
        <Footer/>
        <Routes>
          <Route path="/" />
          <Route path="/"  />
          <Route path="/" />
          <Route path="/" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
