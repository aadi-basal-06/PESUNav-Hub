import { useState } from "react";
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
      // If you want, store the logged-in user state here (localStorage, context etc)
    } catch (err) {
      setStatus(err?.response?.data?.message || "Error");
    }
  };

  return (
    <section style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: "100%", padding: 10, margin: "8px 0" }} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: "100%", padding: 10, margin: "8px 0" }} />
        <button type="submit" style={{ padding: "10px 16px" }}>Login</button>
      </form>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </section>
  );
}
