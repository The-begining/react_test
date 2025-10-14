import React from 'react';
import '../styles/About.css';


const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <div className="about-layout">
      <div className="about-photo-wrap">
        <img src="/profile.jpg" alt="Profile" className="about-photo" />
      </div>
      <div className="about-text">
        <p>
          I’m Shamimeh M. Nav, a researcher and AI developer based in Moss, Norway. My work centers on building trustworthy, human-centered AI—
          with experience across machine learning, deep learning, and data-driven experimentation.
        </p>
        <p>
          I’ve completed an MSc in Applied AI at OsloMet, where I explored EEG and eye‑tracking for biometric authentication, developed NeRF‑based 3D
          reconstruction pipelines, and contributed to applied projects from health-tech to education. I enjoy turning complex ideas into rigorous, practical systems.
        </p>
        <p>
          Multilingual and collaborative, I value clarity, analysis, and iteration. I’m excited to keep building AI that is reliable, explainable, and useful.
        </p>
      </div>
    </div>
  </section>
);


export default About;
