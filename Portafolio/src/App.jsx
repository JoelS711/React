import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Header } from "./Header.jsx";
import { Presentation } from "./Presentation.jsx";
import { Download } from "./Download.jsx";
import { About } from "./About.jsx";
import { Experience } from "./Experience.jsx";
import { Proyects } from "./Proyects.jsx";
import { Skills } from "./Skills.jsx";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const handleDarkModeChange = (newMode) => {
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };
  return (
    <main className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} onDarkModeChange={handleDarkModeChange} />
      <Presentation />
      <Download />
      <About />
      <Experience />
      <Proyects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
