import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Mushroom.css';
import AOS from 'aos';

import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import LinkedInPosts from '../components/LinkedInPosts';
import Certifications from '../components/Certfications';
import Contact from '../components/Contact';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/forest');
  };

  useEffect(() => {
    // Ensure AOS-animated sections become visible after route render
    AOS.refresh();
  }, []);

  return (
    <div className="home-container">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <LinkedInPosts />
      <Contact />

      <div className="mushroom-easter-egg" onClick={handleClick} aria-label="Enter the forest">
        🍄
      </div>
    </div>
  );
}


