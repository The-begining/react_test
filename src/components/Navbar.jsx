import React , {useState, useEffect}from 'react';
import '../styles/Navbar.css';
import CVPdf from '../../CV/CV-Shamimeh.pdf';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-brand rochester-regular">Shamimeh MN</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href={CVPdf} target="_blank" rel="noopener noreferrer" download className="resume-btn">Resume</a></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
