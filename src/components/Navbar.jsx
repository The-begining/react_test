import React , {useState, useEffect}from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">Shubham Singh</div>
      <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
        <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
        <li><a href="#hackathons" onClick={() => setMobileMenuOpen(false)}>Hackathons</a></li>
        <li><a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a></li>
        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
      </ul>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
