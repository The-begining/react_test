import React from 'react';
import '../styles/Skills.css';

const Skills = () => (
  <section id="skills" className="skills" data-aos="fade-up">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skill-category">
        <h3>🧠 AI & Machine Learning</h3>
        <p>Deep Learning (CNN, ViT, Transformer, BERT), NLP, Computer Vision, Conformal Prediction, PyTorch Lightning</p>
      </div>
      
      <div className="skill-category">
        <h3>📊 Data Science & Analytics</h3>
        <p>Statistical Modelling, Feature Engineering, Time-Series Forecasting, PCA, EDA, Visualization (Matplotlib, Seaborn, Power BI)</p>
      </div>
      
      <div className="skill-category">
        <h3>💻 Programming & Tools</h3>
        <p>Python, JavaScript (Node.js, React), R, SQL, FastAPI, scikit-learn, Docker, OpenStack, Nginx</p>
      </div>
      
      <div className="skill-category">
        <h3>⚙️ Systems & Deployment</h3>
        <p>Model Deployment (FastAPI + Docker), MLOps, GPU Optimization, API Design, Database Integration (PostgreSQL, SQLite)</p>
      </div>
      
      <div className="skill-category">
        <h3>🌐 Web & DevOps</h3>
        <p>React, JavaScript (ES6+), HTML/CSS, Wix Custom Development (JavaScript), Sanity CMS, GitLab CI/CD, GitLab Unleash Feature Flags</p>
      </div>
      
      <div className="skill-category">
        <h3>🧩 Professional & Research</h3>
        <p>Technical Documentation, Teaching & Mentorship, Design Thinking, Ethical AI, Cross-disciplinary Collaboration</p>
      </div>
    </div>
  </section>
);

export default Skills;
