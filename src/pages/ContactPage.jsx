import React, { useEffect, useState } from 'react';
import '../styles/ContactForm.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [ts, setTs] = useState(0);

  useEffect(() => {
    setTs(Date.now());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmail = email.trim().length > 0;
    const hasPhone = phone.trim().length > 0;
    if (!hasEmail && !hasPhone) {
      setError('Please provide at least an email or a phone number.');
      return;
    }

    setStatus('Sending...');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, source_path: window.location.pathname, _hp: '', _ts: ts })
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Message sent. Thank you!');
      setName(''); setEmail(''); setPhone(''); setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      setStatus('');
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <p>Leave your message and your email address or phone number. I will get back to you.</p>

        {error && <div className="form-error" role="alert">{error}</div>}
        {status && <div className="form-status" aria-live="polite">{status}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field */}
          <input type="text" name="website" autoComplete="off" style={{ display: 'none' }} tabIndex="-1" aria-hidden="true" />
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +47 123 45 678"
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="cta-button">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;


