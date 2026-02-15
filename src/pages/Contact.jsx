import { useState } from 'react';
import './Contact.css';

const HERO = 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/ca88983c-99f7-4b5f-398d-312dc43b5e00/publicContain';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://contact.landingsite.ai/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, siteId: 'LS-texdvwsf3j' }),
      });
    } catch {
      // silently handle
    }
    setSending(false);
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Contact</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-inner">
          {/* Info column */}
          <div className="contact-info-col">
            <h2>Get in touch</h2>
            <p className="contact-intro">
              Have a question, want to place an order, or just want to say hello? We're here for you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="cd-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>High Street, Dorking RH4 1RE, England</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:01306331144">01306 331144</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@dijodorking.co.uk">info@dijodorking.co.uk</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon–Wed: 7am–3pm</p>
                  <p>Thu–Fri: 7am–5pm</p>
                  <p>Sat: 9am–3pm | Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-col">
            {sent ? (
              <div className="contact-success">
                <div className="success-icon">✅</div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a message</h2>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
