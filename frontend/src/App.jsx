import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="app-container">
      <nav style={{ 
        padding: "1rem", 
        background: "var(--color-royal-purple)", 
        borderBottom: "2px solid var(--color-rebecca-purple)",
        borderRadius: "12px 12px 0 0"
      }}>
        <Link to="/" style={{ marginRight: 12, color: "var(--color-pistachio)", fontWeight: 600 }}>Home</Link>
        <Link to="/login" style={{ marginRight: 12, color: "var(--color-pistachio)", fontWeight: 600 }}>Login</Link>
        <Link to="/register" style={{ color: "var(--color-pistachio)", fontWeight: 600 }}>Register</Link>
      </nav>
      <main style={{ padding: "2rem", background: "#fff", minHeight: "400px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}
