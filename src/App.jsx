import React from 'react';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certfications';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Products from './Products';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true});
  }, []);
  return (
    <>
      <Navbar />
      <FloatingNav />
      <div className="app-container">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Contact />
      </div>
    </>
  );
};

export default App;
