import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "",
    password: "",
    confirmPassword: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    if (form.password !== form.confirmPassword) {
      setStatus("Passwords do not match");
      return;
    }
    try {
      const payload = { name: form.name, email: form.email, password: form.password };
      const res = await axios.post("/api/auth/register", payload);
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
            <path d="M16 21a4 4 0 1 0-8 0" stroke="var(--color-dark-grey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="11" r="4" stroke="var(--color-dark-grey)" strokeWidth="2"/>
            <path d="M19 8v6m3-3h-6" stroke="var(--color-dark-grey)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="auth-heading">Create Account</h2>
        <p className="auth-subtext">Join PESUNav Hub to get started</p>

        {status && (
          <p className={`auth-status ${status === "Success" ? "is-success" : "is-error"}`}>{status}</p>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="field-label" htmlFor="name">Full Name</label>
          <input id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />

          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your.email@gmail.com" value={form.email} onChange={handleChange} required />

          <label className="field-label" htmlFor="studentId">Student ID</label>
          <input id="studentId" name="studentId" placeholder="PES2UG22CS457" value={form.studentId} onChange={handleChange} />

          <label className="field-label" htmlFor="department">Department</label>
          <select id="department" name="department" value={form.department} onChange={handleChange}>
            <option value="">Select department</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics</option>
            <option value="CSE-AIML">Computer Science - AIML</option>
            <option value="BBA">Business</option>
            <option value="PD">Pharmacy</option>
            <option value="NS">Nursing</option>
          </select>

          <label className="field-label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="********" value={form.password} onChange={handleChange} required />

          <label className="field-label" htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" placeholder="********" value={form.confirmPassword} onChange={handleChange} required />

          <button type="submit" className="auth-submit-button">Register</button>
        </form>

        <p className="auth-register">Already have an account? <Link to="/login" className="register-link">Login here</Link></p>
      </div>
    </section>
  );
}
