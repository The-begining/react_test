import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Forest.css';

export default function Forest() {
  const navigate = useNavigate();

  return (
    <div className="forest-page">
      <div className="forest-overlay">
        <div className="bird-container">
          <div className="bird"><img src="/1183753-200.png" alt="bird" /></div>
        </div>

        <div className="forest-content">
          <p> 👋 Hi, I'm Shamim.  </p>
          <h1>Welcome to my forest 🍃</h1>
          <p>
            This is the part of me you don’t see on my CV — where my roots grow wild.
          </p>

          <div className="forest-fun">
            <p>✨ Work in progress 🌱</p>
            <ul>
              <li>weight training in gym </li>
              <li>reading books</li>
              <li>learning new things</li> 
            </ul>
          </div>

          <button className="back-btn" onClick={() => navigate('/')}>← Back to Portfolio</button>
        </div>

        <div className="forest-bottom">
          <span style={{ marginRight: 'auto' }}>
            <img src="/Mushroom1.png" alt="Mushroom" />
          </span>
          <span style={{ marginLeft: 'auto' }}>
            <img src="/Mushroom3.png" alt="Mushroom" />
          </span>
        </div>
      </div>
    </div>
  );
}


