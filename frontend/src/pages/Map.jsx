import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/Map.css";

const studySpaces = [
  {
    id: 1,
    name: "Main Library",
    coordinates: [12.861306, 77.664708],
    description: "Central library with reading rooms and computer lab",
    type: "library",
    block: "Main Block",
    isPrivate: false
  },
  {
    id: 2,
    name: "MRD Block Private Library",
    coordinates: [12.861600, 77.665100],
    description: "Private library in MRD block with focused study environment",
    type: "library",
    block: "MRD Block",
    isPrivate: true
  },
  {
    id: 3,
    name: "PESU Venture Labs",
    coordinates: [12.861000, 77.664500],
    description: "Private library and collaborative workspace in Mech block",
    type: "library",
    block: "Mech Block, 6th Floor",
    isPrivate: true
  },
  {
    id: 4,
    name: "Semester Halls 1st Floor",
    coordinates: [12.861200, 77.664900],
    description: "Semester halls study areas on 1st floor",
    type: "study_area",
    block: "Main Block, 1st Floor",
    isPrivate: false
  },
  {
    id: 5,
    name: "Semester Halls 5th Floor",
    coordinates: [12.861250, 77.664950],
    description: "Semester halls study areas on 5th floor",
    type: "study_area",
    block: "Main Block, 5th Floor",
    isPrivate: false
  },
  {
    id: 6,
    name: "Semester Halls 6th Floor",
    coordinates: [12.861300, 77.665000],
    description: "Semester halls study areas on 6th floor",
    type: "study_area",
    block: "Main Block, 6th Floor",
    isPrivate: false
  },
  {
    id: 7,
    name: "4th Floor Canteen",
    coordinates: [12.861150, 77.664850],
    description: "Casual study space with refreshments on 4th floor",
    type: "cafe",
    block: "Main Block, 4th Floor",
    isPrivate: false
  },
  {
    id: 8,
    name: "5th Floor Canteen",
    coordinates: [12.861200, 77.664900],
    description: "Study space with food and beverage options on 5th floor",
    type: "cafe",
    block: "Main Block, 5th Floor",
    isPrivate: false
  },
  {
    id: 9,
    name: "Pixel Canteen",
    coordinates: [12.861100, 77.664800],
    description: "Modern canteen with comfortable seating for study breaks",
    type: "cafe",
    block: "Main Block",
    isPrivate: false
  },
  {
    id: 10,
    name: "Vakula Mess",
    coordinates: [12.861350, 77.665050],
    description: "Mess facility with casual dining and study spaces",
    type: "cafe",
    block: "Main Block",
    isPrivate: false
  },
  {
    id: 11,
    name: "PESU Venture Labs (Lab)",
    coordinates: [12.861000, 77.664500],
    description: "Lab facilities in Mech block for practical study sessions",
    type: "lab",
    block: "Mech Block, 6th Floor",
    isPrivate: false
  },
  {
    id: 12,
    name: "Quadrangle",
    coordinates: [12.861400, 77.665000],
    description: "Open space suitable for group discussions and outdoor studying",
    type: "discussion",
    block: "Main Block",
    isPrivate: false
  },
  {
    id: 13,
    name: "4th Floor Canteen (Discussion)",
    coordinates: [12.861150, 77.664850],
    description: "4th floor canteen used for group discussions and collaboration",
    type: "discussion",
    block: "Main Block, 4th Floor",
    isPrivate: false
  },
  {
    id: 14,
    name: "5th Floor Canteen (Discussion)",
    coordinates: [12.861200, 77.664900],
    description: "5th floor canteen space for group discussions and meetings",
    type: "discussion",
    block: "Main Block, 5th Floor",
    isPrivate: false
  }
];

const createCustomIcon = (type) => {
  const colors = {
    library: "#2D3748",
    study_area: "#4A5568",
    cafe: "#718096",
    lab: "#2D3748",
    discussion: "#4A5568"
  };
  
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color: ${colors[type]}; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border: 2px solid #2D3748; font-weight: bold;">📍</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
};

export default function Map() {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const campusCenter = [12.861306, 77.664708];

  return (
    <section className="map-page">
      <div className="map-header">
        <h2>Campus Map - Study Spaces</h2>
        <p>Explore available study locations across the campus</p>
      </div>

      <div className="map-container">
        <MapContainer
          center={campusCenter}
          zoom={18}
          className="map-view"
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {studySpaces.map((space) => (
            <Marker
              key={space.id}
              position={space.coordinates}
              icon={createCustomIcon(space.type)}
              onClick={() => setSelectedSpace(space)}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="spaces-list">
        <h3>Available Study Spaces</h3>
        <div className="spaces-grid">
          {studySpaces.map((space) => (
            <div
              key={space.id}
              className={`space-card ${selectedSpace?.id === space.id ? "active" : ""}`}
              onClick={() => setSelectedSpace(space)}
            >
              <div className="space-header">
                <h4>{space.name}</h4>
                <span className={`space-type-badge ${space.type}`}>{space.type.replace("_", " ")}</span>
              </div>
              <p className="space-description">{space.description}</p>
              <div className="space-coordinates">
                <small>📍 {space.coordinates[0].toFixed(4)}, {space.coordinates[1].toFixed(4)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
