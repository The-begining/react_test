import React from 'react';
import '../styles/Hackathons.css';

const Hackathons = () => (
  <section id="hackathons" className="hackathons" data-aos="fade-up">
    <h2>Hackathons & Innovation Challenges</h2>
    
    <div className="hackathon-grid">
      <div className="hackathon-card">
        <div className="hackathon-icon">🧠</div>
        <h3>NORA AI Championship 2025</h3>
        <p className="theme">Medical AI – Tumor Segmentation</p>
        <p className="project">PET Tumor Segmentation using UNet + EfficientNet-B5</p>
        <ul className="highlights">
          <li>Implemented advanced data augmentation and 2.5D enhancement</li>
          <li>Developed anatomical post-filtering to suppress organ false positives</li>
          <li>Achieved competitive Dice scores with patient-only validation setup</li>
          <li>Deployed model via FastAPI with ngrok for real-time inference</li>
        </ul>
      </div>

      <div className="hackathon-card">
        <div className="hackathon-icon">🚑</div>
        <h3>NORA AI Hackathon – Emergency Healthcare RAG (2025)</h3>
        <p className="theme">Retrieval-Augmented Generation (RAG) for Healthcare Validation</p>
        <p className="project">Emergency Healthcare RAG</p>
        <ul className="highlights">
          <li>Built retrieval + classification pipeline using FAISS + BGE embeddings and PubMedBERT cross-encoder</li>
          <li>Achieved ~0.9 validation accuracy for medical topic and truth classification</li>
          <li>Served via FastAPI API for external board validation through ngrok</li>
          <li>Optimized latency and accuracy for low-latency medical retrieval</li>
        </ul>
      </div>

      <div className="hackathon-card">
        <div className="hackathon-icon">🧭</div>
        <h3>AI-Mad-Lab Hackathon (2025)</h3>
        <p className="theme">Autonomous AI Agents</p>
        <p className="project">Singh Synchronize AI – Automated Job Application Agent</p>
        <ul className="highlights">
          <li>Designed personalized AI agent that automates job search, generates cover letters, and submits applications</li>
          <li>Used React + FastAPI + Puppeteer for end-to-end job workflow automation</li>
          <li>Integrated NLP-based profile matching, goal tracking, and duplicate job filtering</li>
        </ul>
      </div>

      <div className="hackathon-card">
        <div className="hackathon-icon">⚓</div>
        <h3>Maritime Hackathon – Port of Oslo (2024)</h3>
        <p className="theme">Sustainability & Carbon Accounting</p>
        <p className="project">Carbon Tax Visualization Tool</p>
        <ul className="highlights">
          <li>Built a Framework to calculate and simulate port emissions and tax impacts</li>
          <li>Used geospatial and emissions data to present actionable sustainability insights</li>
        </ul>
      </div>

      <div className="hackathon-card">
        <div className="hackathon-icon">💬</div>
        <h3>Mental Health Chatbot Hackathon (NORA 2025)</h3>
        <p className="theme">AI for Wellbeing</p>
        <p className="project">LLaMA 3.3-based Norwegian Mental Health Chatbot</p>
        <ul className="highlights">
          <li>Built empathetic, psychologist-style chatbot fine-tuned on Norwegian language data</li>
          <li>Integrated location-based emotion heatmaps and reinforcement learning (RLHF) feedback system</li>
          <li>Designed two-way conversational architecture focusing on brevity, empathy, and natural flow</li>
        </ul>
      </div>

      <div className="hackathon-card">
        <div className="hackathon-icon">🌍</div>
        <h3>Indigenous AI Translator Hackathon (Meta LLaMA, 2025)</h3>
        <p className="theme">Language Preservation through AI</p>
        <p className="project">Self-Learning Indigenous Language Translator</p>
        <ul className="highlights">
          <li>Combined LLaMA + LoRA + FAISS for offline adaptive translation</li>
          <li>Designed Edge AI system deployable on Raspberry Pi for low-resource settings</li>
          <li>Implemented reinforcement learning loop to improve translation dynamically</li>
          <li>Presented outcomes at Innovation Week Oslo</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hackathons;
