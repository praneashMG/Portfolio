// src/App.jsx
import React from 'react';
import Portfolio from './components/Hero'; // Adjust path if your file name or folder is different
import './App.css';
import './components/ProjectShowcase'
import ProjectShowcase from './components/ProjectShowcase';
import SkillsGrid from './components/SkillsGrid';
import AboutUs from './components/AboutUs'
function App() {
  return (
    <div className="App">
      <Portfolio />
       <section id="projects">
        <ProjectShowcase />
      </section>
      
       <SkillsGrid />
      <section id="about">
        <AboutUs />
      </section>
     
      <section id="contact">
      </section>
    </div>
  );
}


export default App;
