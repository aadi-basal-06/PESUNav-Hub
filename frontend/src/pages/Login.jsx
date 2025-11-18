import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await axios.post("/api/auth/login", form);
      setStatus(res.data.message || "Success");
    } catch (err) {
      setStatus(err?.response?.data?.message || "Error");
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <div className="auth-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7" stroke="var(--color-dark-grey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 12H3m0 0 4-4m-4 4 4 4" stroke="var(--color-dark-grey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="auth-heading">Welcome Back</h2>
        <p className="auth-subtext">Login to access your PESUNav Hub account</p>

        {status && (
          <p className={`auth-status ${status === "Success" ? "is-success" : "is-error"}`}>{status}</p>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your.email@pes.edu" value={form.email} onChange={handleChange} required />

          <label className="field-label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="********" value={form.password} onChange={handleChange} required />

          <button type="submit" className="auth-submit-button">Login</button>
        </form>

        <p className="auth-register">Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
      </div>
    </section>
  );
}
