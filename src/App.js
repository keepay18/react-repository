import React, { useEffect } from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Universities from "./components/Universities";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    document.title = "Jakub Pikuła Portfolio"
  }, [])

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Universities />
      <Experience />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
