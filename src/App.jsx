import React from 'react';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forest from './pages/Forest';
import ContactPage from './pages/ContactPage';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true});
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
