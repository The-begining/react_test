import React from 'react';
import '../styles/Projects.css';

const Projects = () => (
  <section id="projects" className="projects" data-aos="fade-up">
    <h2>Projects</h2>
    <ul>
      <li>Sentiment Analysis using LSTM, BERT, and custom Transformer</li>
      <li>Emotion Recognition with CNNs using camera feed</li>
      <li>Drought Prediction using ML models & PCA</li>
      <li>NeRF-based Mesh Extraction & Density Analysis</li>
    </ul>
  </section>
);

export default Projects;
