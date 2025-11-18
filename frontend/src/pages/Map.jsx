import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/Map.css";

const studySpaces = [
  {
    id: 1,
    name: "Main Library",
    coordinates: [12.9265, 77.5997],
    description: "Central library with reading rooms and computer lab",
    type: "library"
  },
  {
    id: 2,
    name: "CS Building Study Area",
    coordinates: [12.9270, 77.6005],
    description: "Computer Science block with open study spaces",
    type: "study_area"
  },
  {
    id: 3,
    name: "North Wing Cafe",
    coordinates: [12.9275, 77.6010],
    description: "Casual study space with refreshments",
    type: "cafe"
  },
  {
    id: 4,
    name: "Engineering Lab",
    coordinates: [12.9260, 77.5990],
    description: "Lab facilities for practical study sessions",
    type: "lab"
  },
  {
    id: 5,
    name: "Auditorium Foyer",
    coordinates: [12.9250, 77.5985],
    description: "Open space suitable for group discussions",
    type: "discussion"
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
  const campusCenter = [12.9265, 77.5997];

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
