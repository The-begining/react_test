import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmail = email.trim().length > 0;
    const hasPhone = phone.trim().length > 0;
    if (!hasEmail && !hasPhone) {
      setError('Please provide at least an email or a phone number.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Anonymous'}`);
    const body = encodeURIComponent(
      `Name: ${name || '—'}\nEmail: ${email || '—'}\nPhone: ${phone || '—'}\n\nMessage:\n${message || '—'}`
    );

    window.location.href = `mailto:shamimehmohajeri@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <p>Leave your message and your email address or phone number. I will get back to you.</p>

        {error && <div className="form-error" role="alert">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
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


