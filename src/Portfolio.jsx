// App.js
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Hero />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Certifications />
    <Contact />
  </div>
);

export default App;

// components/Hero.js
import React from 'react';
const Hero = () => (
  <section id="hero">
    <h1>Shubham Singh</h1>
    <p>Master's Student @ OsloMet | Technical Consultant | Deep Learning & ML Enthusiast</p>
  </section>
);
export default Hero;

// components/About.js
import React from 'react';
const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>Motivated and detail-oriented professional with a solid background in computer science and engineering...</p>
  </section>
);
export default About;

// components/Education.js
import React from 'react';
const Education = () => (
  <section id="education">
    <h2>Education</h2>
    <ul>
      <li>Master's in Data Science, OsloMet University, 2023 - Present</li>
      <li>B.Tech in Computer Science, AKGEC Ghaziabad, 2009 - 2012</li>
      <li>Diploma in Information Technology, Govt. Polytechnic Ghaziabad, 2006 - 2009</li>
    </ul>
  </section>
);
export default Education;

// components/Experience.js
import React from 'react';
const Experience = () => (
  <section id="experience">
    <h2>Work Experience</h2>
    <ul>
      <li>Technical Consultant, The Human Aspect (Feb 2024 - Present)</li>
      <li>Teaching Assistant, OsloMet (Aug 2024 - Present)</li>
      <li>Private Tutor (Feb 2008 - Feb 2018)</li>
    </ul>
  </section>
);
export default Experience;

// components/Skills.js
import React from 'react';
const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>JavaScript, Python, Docker, GitLab CI/CD, OpenStack</li>
      <li>Machine Learning, Deep Learning, NeRF</li>
      <li>Wix Development, GitHub</li>
    </ul>
  </section>
);
export default Skills;

// components/Projects.js
import React from 'react';
const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>Sentiment Analysis using LSTM, BERT</li>
      <li>Emotion Detection with CNNs</li>
      <li>Drought Prediction with Regression Models</li>
      <li>NeRF-based Mesh Extraction</li>
    </ul>
  </section>
);
export default Projects;

// components/Certifications.js
import React from 'react';
const Certifications = () => (
  <section id="certifications">
    <h2>Certifications</h2>
    <ul>
      <li>JavaScript Essential Training - LinkedIn Learning</li>
      <li>Python - Code in Place (Stanford)</li>
      <li>42 Wolfsburg Piscine</li>
    </ul>
  </section>
);
export default Certifications;

// components/Contact.js
import React from 'react';
const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Email: softengg.shubham@gmail.com</p>
    <p>Phone: 96684013</p>
    <p>Location: Tunlandvegen 42, 2072 Dal, Norway</p>
    <ul>
      <li><a href="https://linkedin.com">LinkedIn</a></li>
      <li><a href="https://github.com/The-begining">GitHub</a></li>
      <li><a href="https://kaggle.com/shsin5910">Kaggle</a></li>
    </ul>
  </section>
);
export default Contact;
