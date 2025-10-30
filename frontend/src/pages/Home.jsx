import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img1.png";

export default function Home() {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h1>PESUNav Hub</h1>
      <p>Smart campus geolocation and navigation platform</p>
      <img
        src={logo}
        alt="PESUNav Hub Logo"
        style={{
          marginTop: "1.5rem",
          width: "150px",
          height: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      />

      <div style={{ marginTop: "2.5rem", display: "grid", gap: "1rem", justifyContent: "center" }}>
        <Link to="/profile">Profile</Link>
        <Link to="/map">Map & Navigation</Link>
        <Link to="/events">Events</Link>
        <Link to="/study-spaces">Study Spaces</Link>
        <Link to="/services">Campus Services</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/safety">Safety & Support</Link>
        <Link to="/about">About / Team</Link>
      </div>
    </section>
  );
}

