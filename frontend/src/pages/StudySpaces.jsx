import { useState } from "react";
import "../styles/StudySpaces.css";

const studySpacesData = [
  {
    id: 1,
    name: "Main Library",
    type: "library",
    description: "Central library with reading rooms and computer lab",
    features: ["Silent reading zones", "Computer lab", "Group study rooms", "WiFi"],
    capacity: "500+",
    hours: "8:00 AM - 10:00 PM",
    location: "Building A, 1st Floor"
  },
  {
    id: 2,
    name: "CS Building Study Area",
    type: "study_area",
    description: "Computer Science block with open study spaces",
    features: ["Collaborative spaces", "High-speed internet", "Power outlets", "Open seating"],
    capacity: "200+",
    hours: "9:00 AM - 9:00 PM",
    location: "CS Block, Ground Floor"
  },
  {
    id: 3,
    name: "North Wing Cafe",
    type: "cafe",
    description: "Casual study space with refreshments",
    features: ["Snacks & beverages", "Casual seating", "WiFi", "Background music"],
    capacity: "100+",
    hours: "7:30 AM - 8:00 PM",
    location: "North Wing, East Side"
  },
  {
    id: 4,
    name: "Engineering Lab",
    type: "lab",
    description: "Lab facilities for practical study sessions",
    features: ["Lab equipment", "Project workspace", "Technical support", "Booking required"],
    capacity: "60+",
    hours: "8:00 AM - 6:00 PM",
    location: "Engineering Block, 2nd Floor"
  },
  {
    id: 5,
    name: "Auditorium Foyer",
    type: "discussion",
    description: "Open space suitable for group discussions",
    features: ["Group discussion", "Whiteboard walls", "Comfortable seating", "No noise restrictions"],
    capacity: "150+",
    hours: "8:00 AM - 9:00 PM",
    location: "Central Building, Foyer"
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
              <h3>{selectedSpace.name}</h3>
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
