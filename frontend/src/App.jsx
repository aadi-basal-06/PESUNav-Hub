import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import StudySpaces from "./pages/StudySpaces";
import Feedback from "./pages/Feedback";
import Safety from "./pages/Safety";
import About from "./pages/About";

export default function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/map">Map</Link>
        <Link to="/study-spaces">Study Spaces</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
          <Route path="/study-spaces" element={<StudySpaces />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
