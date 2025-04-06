import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <h2>Contact</h2>
    <p><strong>Email:</strong> softengg.shubham@gmail.com</p>
    <p><strong>Phone:</strong> 96684013</p>
    <p><strong>Location:</strong> Tunlandvegen 42, Dal, Norway</p>
    <div className="links">
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://github.com/The-begining" target="_blank">GitHub</a>
      <a href="https://kaggle.com/shsin5910" target="_blank">Kaggle</a>
    </div>
    <div className="github-widget">
      <h3>My GitHub Activity</h3>
      <img src="https://ghchart.rshah.org/The-begining" alt="GitHub Contributions" />
    </div>  

  </section>
);

export default Contact;
