import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/linkedin_posts.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Failed to load LinkedIn posts:', error));
  }, []);

  return (
    <section id="posts" className="projects">
      <h2>LinkedIn Posts</h2>
      <div className="project-grid">
        {posts.map((post, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{post.title}</h3>
            {post.date && (
              <div className="course">{new Date(post.date).toLocaleDateString()}</div>
            )}
            {post.summary && <p>{post.summary}</p>}

            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                Read on LinkedIn
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LinkedInPosts;


