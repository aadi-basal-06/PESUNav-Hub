import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Events from "./pages/Events";
import StudySpaces from "./pages/StudySpaces";
import Services from "./pages/Services";
import Feedback from "./pages/Feedback";
import Safety from "./pages/Safety";
import About from "./pages/About";

export default function App() {
  return (
    <div className="app-container">
      <nav style={{
        padding: "1rem",
        background: "var(--color-medium-brown)",
        borderBottom: "2px solid var(--color-dark-brown)",
        borderRadius: "12px 12px 0 0"
      }}>
        <Link to="/" style={{ marginRight: 12, color: "var(--color-light-brown)", fontWeight: 600 }}>Home</Link>
        <Link to="/login" style={{ marginRight: 12, color: "var(--color-light-brown)", fontWeight: 600 }}>Login</Link>
        <Link to="/register" style={{ color: "var(--color-light-brown)", fontWeight: 600 }}>Register</Link>
        <Link to="/profile" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Profile</Link>
        <Link to="/map" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Map</Link>
        <Link to="/events" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Events</Link>
        <Link to="/study-spaces" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Study Spaces</Link>
        <Link to="/services" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Services</Link>
        <Link to="/feedback" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Feedback</Link>
        <Link to="/safety" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>Safety</Link>
        <Link to="/about" style={{ color: "var(--color-soft-pink)", fontWeight: 600 }}>About</Link>
      </nav>
      <hr style={{
        border: "none",
        borderTop: "2px solid var(--color-golden-yellow)",
        margin: "0 0 2rem 0"
      }} />
      <main style={{ padding: "2rem", background: "#fff", minHeight: "400px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
          <Route path="/events" element={<Events />} />
          <Route path="/study-spaces" element={<StudySpaces />} />
          <Route path="/services" element={<Services />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}