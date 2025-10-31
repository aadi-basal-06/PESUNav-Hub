import React from "react";
import logo from "../assets/img1.png";

export default function Home() {
  return (
    <section className="home-hero">
      <h1>PESUNav Hub</h1>
      <p>Smart campus geolocation and navigation platform</p>
      <img
        src={logo}
        alt="PESUNav Hub Logo"
        className="hero-logo"
      />

    </section>
  );
}
