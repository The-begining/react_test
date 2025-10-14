import React from 'react';
import '../styles/Contact.css';
import CVPdf from '../../CV/CV-Shamimeh.pdf';

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <h2>Contact</h2>
    <p><strong>Name:</strong> Shamimeh M. Nav</p>
    <p><strong>Email:</strong> shamimehmohajeri@gmail.com</p>
    <p><strong>Phone:</strong> (+47) 40565746</p>
    <p><strong>Location:</strong> Kirkegata, Moss, 1530, Norway</p>
    <p><strong>Date of birth:</strong> 04.10.1998</p>
    <div className="links">
      <a href="https://www.linkedin.com/in/Shamimeh-MN" target="_blank">LinkedIn</a>
      <a href="https://github.com/ShamimehM" target="_blank">GitHub</a>
      <a href="https://kaggle.com/shsin5910" target="_blank">Kaggle</a>
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
