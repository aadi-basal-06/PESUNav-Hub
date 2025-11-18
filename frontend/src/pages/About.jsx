import "../styles/About.css";

export default function About() {
  const features = [
    {
      icon: "🗺️",
      title: "Interactive Campus Map",
      description: "Navigate campus with ease using our interactive OpenStreetMap integration. Find study spaces, buildings, and facilities."
    },
    {
      icon: "📚",
      title: "Study Spaces Directory",
      description: "Discover and filter available study locations across campus, complete with amenities and operating hours."
    },
    {
      icon: "👤",
      title: "Student Profile",
      description: "Manage your student profile, upload your picture, and maintain your class schedule in one place."
    },
    {
      icon: "🔐",
      title: "Secure Authentication",
      description: "Create an account and securely access personalized features with our MongoDB-backed authentication."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Access PESUNav Hub from any device with our mobile-friendly and responsive interface."
    },
    {
      icon: "🛡️",
      title: "Safety Information",
      description: "Access important safety procedures, emergency contacts, and campus security information."
    }
  ];

  const team = [
    {
      role: "Product & Development",
      description: "Built with modern web technologies including React, Node.js, Express, and MongoDB."
    },
    {
      role: "Design & UX",
      description: "User-centric design with focus on accessibility and ease of navigation for all students."
    },
    {
      role: "Campus Integration",
      description: "Integrated with campus facilities data and OpenStreetMap to provide real-time location information."
    }
  ];

  return (
    <section className="about-page">
      <div className="hero-section">
        <h1>PESUNav Hub</h1>
        <h2>Smart Campus Navigation & Information Platform</h2>
        <p>Empowering PES University students to navigate campus efficiently and access essential information</p>
      </div>

      <div className="about-content">
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            PESUNav Hub is designed to simplify the student experience at PES University by providing a centralized platform for campus navigation, study space discovery, and access to essential campus information. We aim to help students make the most of their university experience by making it easier to find resources, connect with campus services, and stay safe.
          </p>
        </div>

        <div className="features-section">
          <h3>Key Features</h3>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="how-it-works">
          <h3>How It Works</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Create Account</h4>
              <p>Register with your email to create a personalized student profile and secure your data.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Explore Campus</h4>
              <p>Browse the interactive map to discover study spaces, buildings, and facilities across campus.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Plan Your Day</h4>
              <p>Manage your class schedule and find ideal study locations that match your needs.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Stay Safe</h4>
              <p>Access safety information, emergency contacts, and campus security resources anytime.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Technology Stack</h3>
          <div className="team-grid">
            {team.map((item, idx) => (
              <div key={idx} className="team-card">
                <h4>{item.role}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>🎯 Student-Centric</h4>
              <p>Everything we build is designed with students in mind, focusing on solving real campus challenges.</p>
            </div>
            <div className="value-item">
              <h4>🔒 Safety First</h4>
              <p>We prioritize student safety and security, providing access to emergency information and campus resources.</p>
            </div>
            <div className="value-item">
              <h4>📱 Accessible</h4>
              <p>Our platform is designed to be accessible to all students regardless of device or technical background.</p>
            </div>
            <div className="value-item">
              <h4>🚀 Innovative</h4>
              <p>We use cutting-edge technology like OpenStreetMap and modern web frameworks to enhance the student experience.</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-items">
            <div className="faq-item">
              <h4>Is my information secure?</h4>
              <p>Yes, we use industry-standard security practices including password hashing with bcryptjs and MongoDB encryption to protect your personal information.</p>
            </div>
            <div className="faq-item">
              <h4>Can I access the map offline?</h4>
              <p>The interactive map requires an internet connection. However, you can save study space information in your profile for reference.</p>
            </div>
            <div className="faq-item">
              <h4>How often is the campus data updated?</h4>
              <p>Study space information and campus facility data are updated regularly to ensure accuracy. We welcome feedback on any outdated information.</p>
            </div>
            <div className="faq-item">
              <h4>Who should I contact for technical issues?</h4>
              <p>Please visit our Feedback page to report any technical issues or contact our support team at support@pesunavhub.edu</p>
            </div>
            <div className="faq-item">
              <h4>Can I access PESUNav Hub on mobile?</h4>
              <p>Yes! PESUNav Hub is fully responsive and works seamlessly on smartphones, tablets, and desktop browsers.</p>
            </div>
            <div className="faq-item">
              <h4>Is this platform official?</h4>
              <p>PESUNav Hub is a student-focused platform designed to enhance the campus experience. For official university information, please visit the PES University website.</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Have Questions?</h3>
          <p>We'd love to hear from you! Visit our <strong>Feedback & Contact</strong> page to reach out to us with questions, suggestions, or feedback.</p>
          <a href="/feedback" className="cta-button">Contact Us</a>
        </div>
      </div>

      <footer className="about-footer">
        <p>&copy; 2024 PESUNav Hub. All rights reserved.</p>
        <p>Designed and developed for PES University students.</p>
      </footer>
    </section>
  );
}
