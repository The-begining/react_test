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
          <h1>Welcome to my forest 🍃</h1>
          <p>
            This is the part of me you don’t see on my résumé — where my roots grow wild.
          </p>

          <div className="forest-fun">
            <p>✨ Favorite things, quotes, inspirations, a little magic…</p>
            <ul>
              <li>🕊️ Long walks under soft rain</li>
              <li>📚 Cozy books & warm tea</li>
              <li>🌿 Whispering trees</li>
            </ul>
          </div>

          <button className="back-btn" onClick={() => navigate('/')}>← Back to Portfolio</button>
        </div>

        <div className="forest-bottom">
          <span>🍄</span>
          <span>🍄</span>
          <span>🍄</span>
        </div>
      </div>
    </div>
  );
}


