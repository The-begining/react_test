import React, { useState } from 'react';
import '../styles/Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const titles = ['React Developer', 'ML Engineer', 'Wix Consultant', 'Data Analyst'];
  const [typedTitles, setTypedTitles] = useState([]);
  const [currentWord, setCurrentWord] = useState('');

  const handleType = (text) => {
    setCurrentWord(text);

    // Add title to badges only once
    if (!typedTitles.includes(text) && titles.includes(text)) {
      setTypedTitles((prev) => [...prev, text]);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.img
          src="/profile.jpg"
          alt="Shubham Singh"
          className="profile-pic"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Shubham Singh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Typewriter
            words={titles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1400}
            onType={handleType}
          />
        </motion.h2>

        <motion.div
          className="final-titles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {typedTitles.map((title, index) => (
            <motion.span
              key={index}
              className="title-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              {title}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Building smart systems and AI-powered tools that solve real-world problems.
        </motion.p>

        <motion.a
          href="#contact"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Let’s Connect
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
