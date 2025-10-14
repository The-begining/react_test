import React from 'react';
import '../styles/Contact.css';
import CVPdf from '../../CV/CV-Shamimeh.pdf';

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <h2>Contact</h2>
    <p><strong>Name:</strong> Shamimeh M. Nav</p>
    <p><strong>Email:</strong> shamimehmohajeri@gmail.com</p>
    <p><strong>Location:</strong> Moss, Norway</p>
    <div className="links">
      <a href="https://www.linkedin.com/in/Shamimeh-MN" target="_blank">LinkedIn</a>
      <a href="https://github.com/ShamimehM" target="_blank">GitHub</a>
    </div>
    <div className="resume">
      <a href={CVPdf} target="_blank" rel="noopener noreferrer" download>
        Download Resume (PDF)
      </a>
    </div>
    <div className="github-widget">
      <h3>My GitHub Activity</h3>
      <img src="https://ghchart.rshah.org/ShamimehM" alt="GitHub Contributions" />
    </div>  

  </section>
);

export default Contact;
