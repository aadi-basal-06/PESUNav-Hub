import React from "react";
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
          width: "150px", // Adjust size as needed
          height: "auto", 
          display: "block", 
          marginLeft: "auto", 
          marginRight: "auto" 
        }} 
      />
    </section>
  );
}
