import React , {useState, useEffect}from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Shubham Singh</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
