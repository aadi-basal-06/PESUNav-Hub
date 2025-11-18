import { useState } from "react";
import "../styles/Feedback.css";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="feedback-page">
      <div className="feedback-header">
        <h2>Feedback & Contact</h2>
        <p>We'd love to hear from you. Share your feedback, report issues, or get in touch with us.</p>
      </div>

      <div className="feedback-content">
        <div className="feedback-form-container">
          <h3>Send us a Message</h3>
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your feedback! We'll get back to you soon.
            </div>
          )}
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@pes.edu"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your feedback about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please share your feedback, suggestions, or concerns..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Feedback</button>
          </form>
        </div>

        <div className="contact-info-container">
          <h3>Contact Information</h3>
          
          <div className="contact-card">
            <h4>📧 Email</h4>
            <p><a href="mailto:support@pesunavhub.edu">support@pesunavhub.edu</a></p>
            <p className="contact-desc">For general inquiries and support</p>
          </div>

          <div className="contact-card">
            <h4>📱 Phone</h4>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            <p className="contact-desc">Monday - Friday, 9:00 AM - 5:00 PM</p>
          </div>

          <div className="contact-card">
            <h4>📍 Office Location</h4>
            <p>PES University<br/>Electronics City Campus<br/>Bangalore, India</p>
            <p className="contact-desc">Student Services Building, Ground Floor</p>
          </div>

          <div className="contact-card">
            <h4>🕐 Office Hours</h4>
            <ul className="hours-list">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="contact-card social-card">
            <h4>🔗 Social Media</h4>
            <div className="social-links">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#instagram" className="social-link">Instagram</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
            </div>
          </div>

          <div className="faq-section">
            <h4>❓ FAQ</h4>
            <div className="faq-item">
              <p className="faq-question">How do I report a bug or issue?</p>
              <p className="faq-answer">Please email us at support@pesunavhub.edu with details about the issue.</p>
            </div>
            <div className="faq-item">
              <p className="faq-question">How long does it take to get a response?</p>
              <p className="faq-answer">We typically respond to inquiries within 24-48 hours on business days.</p>
            </div>
            <div className="faq-item">
              <p className="faq-question">Can I suggest new features?</p>
              <p className="faq-answer">Absolutely! We'd love to hear your suggestions. Use the feedback form above.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
