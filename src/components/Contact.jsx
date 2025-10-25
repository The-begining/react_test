import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <h2>Contact</h2>
    <p><strong>Email:</strong> softengg.shubham@gmail.com</p>
    <div className="links">
      <a href="https://www.linkedin.com/in/shubham-singh-oslo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/The-begining" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.kaggle.com/shsin5910" target="_blank" rel="noopener noreferrer">Kaggle</a>
    </div>
    <div className="github-widget">
      <h3>My GitHub Activity</h3>
      <img src="https://ghchart.rshah.org/The-begining" alt="GitHub Contributions" />
    </div>  

  </section>
);

export default Contact;
