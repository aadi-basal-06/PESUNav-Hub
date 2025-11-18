import { useState } from "react";
import "../styles/Safety.css";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("emergency");

  const emergencyContacts = [
    {
      title: "Police",
      number: "112",
      description: "National emergency police helpline - Available 24/7",
      icon: "🚔"
    },
    {
      title: "Campus Security",
      number: "+91 80 40 92 5555",
      description: "PES University Campus Security - Always available",
      icon: "🔒"
    },
    {
      title: "Medical Emergency",
      number: "102",
      description: "Ambulance and medical assistance",
      icon: "🚑"
    },
    {
      title: "Fire Department",
      number: "101",
      description: "Fire and rescue services",
      icon: "🚒"
    }
  ];

  const safetyProcedures = [
    {
      title: "Personal Safety",
      tips: [
        "Always be aware of your surroundings on campus",
        "Travel in groups, especially during late hours",
        "Keep valuables secure and out of sight",
        "Inform someone of your whereabouts and expected return time",
        "Use well-lit pathways and avoid deserted areas",
        "Trust your instincts and report suspicious activities"
      ]
    },
    {
      title: "Building Safety",
      tips: [
        "Know the emergency exits and assembly points in your building",
        "Report any damaged locks or security issues immediately",
        "Don't hold doors open for unknown individuals",
        "Use the buddy system when entering/leaving buildings",
        "Report any unattended bags or suspicious items",
        "Familiarize yourself with emergency alarm locations"
      ]
    },
    {
      title: "Event Safety",
      tips: [
        "Attend events in groups and assign a meeting point",
        "Keep emergency contacts easily accessible",
        "Stay hydrated and avoid excessive alcohol",
        "Know how to contact event security",
        "Watch over your belongings at all times",
        "Have a planned mode of transportation"
      ]
    },
    {
      title: "Digital Safety",
      tips: [
        "Use strong passwords and enable two-factor authentication",
        "Don't share personal information online",
        "Be cautious of phishing emails and suspicious links",
        "Keep your devices updated with latest security patches",
        "Use the campus WiFi cautiously for sensitive transactions",
        "Report any account compromises immediately"
      ]
    },
    {
      title: "Travel Safety",
      tips: [
        "Share your location with trusted friends during travel",
        "Use registered cabs or campus transportation",
        "Avoid displaying expensive items or large sums of cash",
        "Keep doors locked while traveling",
        "Stay alert and avoid distractions (earbuds, phones)",
        "Trust your gut feeling about drivers and routes"
      ]
    },
    {
      title: "Health & Wellness",
      tips: [
        "Visit the campus health center for regular check-ups",
        "Know the location of the nearest medical facility",
        "Keep medications and health records accessible",
        "Practice mental health awareness and seek support when needed",
        "Participate in safety and wellness workshops",
        "Report health-related hazards on campus"
      ]
    }
  ];

  const importantNumbers = [
    { label: "Police", number: "112" },
    { label: "Ambulance", number: "102" },
    { label: "Fire", number: "101" },
    { label: "Campus Security", number: "+91 80 40 92 5555" },
    { label: "Women Helpline", number: "1091" }
  ];

  return (
    <section className="safety-page">
      <div className="safety-header">
        <h2>Campus Safety & Security</h2>
        <p>Your safety is our priority. Here are essential information and procedures.</p>
      </div>

      <div className="emergency-banner">
        <h3>⚠️ EMERGENCY - DIAL 112</h3>
        <p>Police, Ambulance, and Fire services available 24/7</p>
        <p className="banner-note">For campus-specific issues, contact Campus Security: +91 80 40 92 5555</p>
      </div>

      <div className="quick-contacts">
        <h3>Quick Emergency Contacts</h3>
        <div className="contacts-grid">
          {emergencyContacts.map((contact, idx) => (
            <div key={idx} className="contact-box">
              <div className="contact-icon">{contact.icon}</div>
              <h4>{contact.title}</h4>
              <a href={`tel:${contact.number}`} className="contact-number">{contact.number}</a>
              <p className="contact-note">{contact.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="procedures-section">
        <div className="tabs-header">
          <h3>Safety Procedures & Guidelines</h3>
          <div className="tabs">
            {safetyProcedures.map((procedure, idx) => (
              <button
                key={idx}
                className={`tab-btn ${activeTab === procedure.title ? "active" : ""}`}
                onClick={() => setActiveTab(procedure.title)}
              >
                {procedure.title}
              </button>
            ))}
          </div>
        </div>

        <div className="procedures-content">
          {safetyProcedures.map((procedure) => (
            activeTab === procedure.title && (
              <div key={procedure.title} className="procedure-detail">
                <h4>{procedure.title}</h4>
                <ul className="tips-list">
                  {procedure.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>

      <div className="info-boxes">
        <div className="info-box">
          <h4>📱 Important Numbers to Save</h4>
          <div className="numbers-table">
            {importantNumbers.map((item, idx) => (
              <div key={idx} className="number-row">
                <span className="number-label">{item.label}</span>
                <a href={`tel:${item.number}`} className="number-value">{item.number}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h4>🏫 Campus Safety Resources</h4>
          <ul className="resources-list">
            <li>Campus Security Office: Student Services Building, Ground Floor</li>
            <li>Student Counseling Services: Available for safety concerns</li>
            <li>Health Center: Open 24 hours for medical emergencies</li>
            <li>Lost and Found: Main Administrative Building</li>
            <li>Document Verification: For incident reports and documentation</li>
          </ul>
        </div>
      </div>

      <div className="safety-tips">
        <h3>General Safety Tips</h3>
        <div className="tips-cards">
          <div className="tip-card">
            <div className="tip-number">1</div>
            <h5>Stay Alert</h5>
            <p>Be aware of your surroundings at all times and report suspicious activities immediately.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">2</div>
            <h5>Travel in Groups</h5>
            <p>Especially during evening hours, always travel with friends or use campus transportation.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">3</div>
            <h5>Know Emergency Exits</h5>
            <p>Familiarize yourself with exit routes and assembly points in buildings you frequent.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">4</div>
            <h5>Secure Your Belongings</h5>
            <p>Never leave bags unattended and keep valuables in a secure location.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">5</div>
            <h5>Use Buddy System</h5>
            <p>Always let someone know where you are and when you expect to return.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">6</div>
            <h5>Report Incidents</h5>
            <p>Report any safety concerns or incidents to Campus Security immediately.</p>
          </div>
        </div>
      </div>

      <div className="footer-note">
        <p>For any safety concerns or to report an incident, please contact Campus Security at <strong>+91 80 40 92 5555</strong> or visit the Security Office in the Student Services Building.</p>
      </div>
    </section>
  );
}
