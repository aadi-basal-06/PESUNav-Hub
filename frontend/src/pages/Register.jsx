import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await axios.post("/api/auth/register", form);
      setStatus(res.data.message || "Success");
    } catch (err) {
      setStatus(err?.response?.data?.message || "Error");
    }
  };

  return (
    <section style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Create account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{ width: "100%", padding: 10, margin: "8px 0" }} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: "100%", padding: 10, margin: "8px 0" }} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: "100%", padding: 10, margin: "8px 0" }} />
        <button type="submit" style={{ padding: "10px 16px" }}>Sign up</button>
      </form>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </section>
  );
}
