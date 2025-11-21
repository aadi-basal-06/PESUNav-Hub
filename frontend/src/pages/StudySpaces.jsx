import { useState } from "react";
import "../styles/StudySpaces.css";

const studySpacesData = [
  {
    id: 1,
    name: "Main Library",
    type: "library",
    description: "Central library with reading rooms and computer lab",
    features: ["Silent reading zones", "Computer lab", "Group study rooms", "WiFi", "AC"],
    capacity: "500+",
    hours: "8:00 AM - 10:00 PM",
    location: "Main Block, Ground Floor",
    isPrivate: false
  },
  {
    id: 2,
    name: "MRD Block Private Library",
    type: "library",
    description: "Private library in MRD block with focused and quiet study environment",
    features: ["Quiet study environment", "Individual study cubicles", "WiFi", "AC", "Limited capacity"],
    capacity: "80+",
    hours: "8:00 AM - 10:00 PM",
    location: "MRD Block",
    isPrivate: true
  },
  {
    id: 3,
    name: "PESU Venture Labs (Private Library)",
    type: "library",
    description: "Private library and collaborative workspace for research and development",
    features: ["Research materials", "Quiet zones", "Collaborative spaces", "WiFi", "AC", "Technical resources"],
    capacity: "100+",
    hours: "8:00 AM - 10:00 PM",
    location: "Mech Block, 6th Floor",
    isPrivate: true
  },
  {
    id: 4,
    name: "Semester Halls 1st Floor",
    type: "study_area",
    description: "Semester halls study areas on 1st floor with comfortable seating",
    features: ["Open seating", "Good lighting", "Whiteboard walls", "WiFi", "AC"],
    capacity: "150+",
    hours: "8:00 AM - 9:00 PM",
    location: "Main Block, 1st Floor",
    isPrivate: false
  },
  {
    id: 5,
    name: "Semester Halls 5th Floor",
    type: "study_area",
    description: "Semester halls study areas on 5th floor with collaborative spaces",
    features: ["Flexible seating", "Group study zones", "Power outlets", "WiFi", "AC"],
    capacity: "150+",
    hours: "8:00 AM - 9:00 PM",
    location: "Main Block, 5th Floor",
    isPrivate: false
  },
  {
    id: 6,
    name: "Semester Halls 6th Floor",
    type: "study_area",
    description: "Semester halls study areas on 6th floor with modern amenities",
    features: ["Modern furniture", "Breakout areas", "High-speed internet", "Power outlets", "AC"],
    capacity: "150+",
    hours: "8:00 AM - 9:00 PM",
    location: "Main Block, 6th Floor",
    isPrivate: false
  },
  {
    id: 7,
    name: "4th Floor Canteen",
    type: "cafe",
    description: "Casual study space with refreshments on 4th floor",
    features: ["Snacks & beverages", "Comfortable seating", "WiFi", "AC", "Food court"],
    capacity: "120+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block, 4th Floor",
    isPrivate: false
  },
  {
    id: 8,
    name: "5th Floor Canteen",
    type: "cafe",
    description: "Study space with food and beverage options on 5th floor",
    features: ["Variety of food", "Quick service", "WiFi", "AC", "Casual tables"],
    capacity: "120+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block, 5th Floor",
    isPrivate: false
  },
  {
    id: 9,
    name: "Pixel Canteen",
    type: "cafe",
    description: "Modern canteen with comfortable seating for study breaks",
    features: ["Contemporary design", "Quality food", "WiFi", "AC", "Charging stations"],
    capacity: "100+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block",
    isPrivate: false
  },
  {
    id: 10,
    name: "Vakula Mess",
    type: "cafe",
    description: "Mess facility with casual dining and study spaces",
    features: ["Affordable meals", "Quick bites", "Casual atmosphere", "WiFi", "AC"],
    capacity: "200+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block",
    isPrivate: false
  },
  {
    id: 11,
    name: "PESU Venture Labs",
    type: "lab",
    description: "Lab facilities for practical study sessions and project work",
    features: ["Lab equipment", "Project workspace", "Technical support", "WiFi", "AC", "Booking required"],
    capacity: "80+",
    hours: "8:00 AM - 6:00 PM",
    location: "Mech Block, 6th Floor",
    isPrivate: false
  },
  {
    id: 12,
    name: "Quadrangle",
    type: "discussion",
    description: "Open space suitable for group discussions and outdoor studying",
    features: ["Open-air seating", "Flexible layout", "Good natural lighting", "Outdoor environment"],
    capacity: "200+",
    hours: "8:00 AM - 6:00 PM",
    location: "Main Block",
    isPrivate: false
  },
  {
    id: 13,
    name: "4th Floor Canteen (Discussion Space)",
    type: "discussion",
    description: "4th floor canteen used for group discussions and collaboration",
    features: ["Group tables", "Casual environment", "WiFi", "AC", "Food service nearby"],
    capacity: "120+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block, 4th Floor",
    isPrivate: false
  },
  {
    id: 14,
    name: "5th Floor Canteen (Discussion Space)",
    type: "discussion",
    description: "5th floor canteen space for group discussions and meetings",
    features: ["Spacious layout", "Collaborative seating", "WiFi", "AC", "Central location"],
    capacity: "120+",
    hours: "7:30 AM - 8:00 PM",
    location: "Main Block, 5th Floor",
    isPrivate: false
  }
];

export default function StudySpaces() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSpace, setSelectedSpace] = useState(null);

  const filteredSpaces = selectedType === "all" 
    ? studySpacesData 
    : studySpacesData.filter(space => space.type === selectedType);

  const typeLabels = {
    library: "📚 Library",
    study_area: "📖 Study Areas",
    cafe: "☕ Cafe",
    lab: "🔬 Lab",
    discussion: "💬 Discussion Spaces"
  };

  return (
    <section className="study-spaces-page">
      <div className="spaces-header">
        <h2>Study Spaces</h2>
        <p>Discover the perfect place to study on campus</p>
      </div>

      <div className="filter-section">
        <button 
          className={`filter-btn ${selectedType === "all" ? "active" : ""}`}
          onClick={() => setSelectedType("all")}
        >
          All Spaces
        </button>
        {Object.entries(typeLabels).map(([type, label]) => (
          <button
            key={type}
            className={`filter-btn ${selectedType === type ? "active" : ""}`}
            onClick={() => setSelectedType(type)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="spaces-content">
        <div className="spaces-showcase">
          {filteredSpaces.map(space => (
            <div
              key={space.id}
              className={`space-showcase-card ${selectedSpace?.id === space.id ? "selected" : ""}`}
              onClick={() => setSelectedSpace(space)}
            >
              <div className="space-card-header">
                <h3>{space.name}</h3>
                <span className={`type-badge ${space.type}`}>{typeLabels[space.type]}</span>
              </div>
              <p className="space-description">{space.description}</p>
              <div className="space-quick-info">
                <div className="info-item">
                  <span className="info-label">Capacity:</span>
                  <span className="info-value">{space.capacity}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Hours:</span>
                  <span className="info-value">{space.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedSpace && (
          <div className="space-details-panel">
            <button className="close-btn" onClick={() => setSelectedSpace(null)}>✕</button>
            <div className="details-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3>{selectedSpace.name}</h3>
                {selectedSpace.isPrivate && (
                  <span style={{
                    backgroundColor: '#dc2626',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75em',
                    fontWeight: 'bold'
                  }}>
                    🔒 PRIVATE
                  </span>
                )}
              </div>
              <p className="details-description">{selectedSpace.description}</p>

              <div className="details-section">
                <h4>Features</h4>
                <ul className="features-list">
                  {selectedSpace.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">📍 Location</span>
                  <span className="detail-value">{selectedSpace.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Capacity</span>
                  <span className="detail-value">{selectedSpace.capacity}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">⏰ Hours</span>
                  <span className="detail-value">{selectedSpace.hours}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🏷️ Type</span>
                  <span className="detail-value">{typeLabels[selectedSpace.type]}</span>
                </div>
              </div>

              <button className="navigate-btn" onClick={() => alert("Navigate to " + selectedSpace.name)}>
                Navigate to this space
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
