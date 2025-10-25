import React from 'react';
import '../styles/App.css';

const FloatingNav = () => {
  const navItems = [
    { icon: '🏠', section: 'hero', tooltip: 'Home' },
    { icon: '👤', section: 'about', tooltip: 'About' },
    { icon: '🎓', section: 'education', tooltip: 'Education' },
    { icon: '💼', section: 'experience', tooltip: 'Experience' },
    { icon: '⚡', section: 'skills', tooltip: 'Skills' },
    { icon: '🚀', section: 'projects', tooltip: 'Projects' },
    { icon: '💻', section: 'hackathons', tooltip: 'Hackathons' },
    { icon: '🏆', section: 'certifications', tooltip: 'Certifications' },
    { icon: '📧', section: 'contact', tooltip: 'Contact' }
  ];

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <a
          key={item.section}
          href={`#${item.section}`}
          className="floating-nav-item"
          title={item.tooltip}
        >
          <span>{item.icon}</span>
          <span className="tooltip">{item.tooltip}</span>
        </a>
      ))}
    </nav>
  );
};

export default FloatingNav;
