import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Failed to load project data:', error));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {proj.techStack && (
              <div className="tech-tags">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            )}

            {proj.achievements && (
              <ul className="achievement-list">
                {proj.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
