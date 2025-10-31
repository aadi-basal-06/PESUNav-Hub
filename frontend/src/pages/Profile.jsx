import { useEffect, useMemo, useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const DEFAULT_AVATAR = "https://cdn.builder.io/api/v1/image/assets%2Fb07d8b24589c491fafbc50f7886a2e1d%2F79b06a1d8c2f41f08fffda9915416cbf?format=webp&width=800";

function readLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export default function Profile() {
  const [profile, setProfile] = useState(() =>
    readLS("studentProfile", {
      fullName: "",
      email: "",
      studentId: "",
      department: "",
      imageDataUrl: ""
    })
  );
  const [previewUrl, setPreviewUrl] = useState(profile.imageDataUrl);

  useEffect(() => {
    writeLS("studentProfile", { ...profile, imageDataUrl: previewUrl });
  }, [profile, previewUrl]);

  const [classes, setClasses] = useState(() =>
    readLS("classSchedule", [
      {
        id: crypto.randomUUID(),
        title: "Data Structures",
        instructor: "Dr. Smith",
        day: "Monday",
        time: "09:00",
        room: "Room 301"
      },
      {
        id: crypto.randomUUID(),
        title: "Operating Systems",
        instructor: "Prof. Johnson",
        day: "Monday",
        time: "11:00",
        room: "Room 205"
      },
      {
        id: crypto.randomUUID(),
        title: "Database Management",
        instructor: "Dr. Williams",
        day: "Tuesday",
        time: "14:00",
        room: "Lab 401"
      }
    ])
  );

  useEffect(() => {
    writeLS("classSchedule", classes);
  }, [classes]);

  const [filterDay, setFilterDay] = useState("All");
  const filtered = useMemo(
    () => (filterDay === "All" ? classes : classes.filter(c => c.day === filterDay)),
    [classes, filterDay]
  );

  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", instructor: "", day: "Monday", time: "09:00", room: "" });

  const handleImgChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreviewUrl(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleAddClass = e => {
    e.preventDefault();
    const newItem = { id: crypto.randomUUID(), ...form };
    setClasses(prev => [...prev, newItem]);
    setForm({ title: "", instructor: "", day: "Monday", time: "09:00", room: "" });
    setShowAdd(false);
  };

  const removeClass = id => setClasses(prev => prev.filter(c => c.id !== id));

  return (
    <section className="profile-page">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img className="avatar-image" src={previewUrl || DEFAULT_AVATAR} alt="Student avatar" />
          <label className="upload-button">
            <input type="file" accept="image/*" onChange={handleImgChange} />
            Upload Image
          </label>
        </div>

        <form className="profile-info" onSubmit={e => e.preventDefault()}>
          <div className="info-row">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} />
          </div>
          <div className="info-row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} />
          </div>
          <div className="info-row grid-2">
            <div>
              <label htmlFor="studentId">Student ID</label>
              <input id="studentId" value={profile.studentId} onChange={e => setProfile(p => ({ ...p, studentId: e.target.value }))} />
            </div>
            <div>
              <label htmlFor="department">Department</label>
              <input id="department" value={profile.department} onChange={e => setProfile(p => ({ ...p, department: e.target.value }))} />
            </div>
          </div>
        </form>
      </div>

      <div className="scheduler-section">
        <div className="scheduler-header">
          <div className="scheduler-title">Class Scheduler</div>
          <button type="button" className="add-class-button" onClick={() => setShowAdd(s => !s)}>
            <span aria-hidden>＋</span> Add Class
          </button>
        </div>

        {showAdd && (
          <form className="add-class-form" onSubmit={handleAddClass}>
            <div className="form-grid">
              <div>
                <label htmlFor="title">Course Title</label>
                <input id="title" name="title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
              </div>
              <div>
                <label htmlFor="instructor">Instructor</label>
                <input id="instructor" name="instructor" value={form.instructor} onChange={e => setForm(f => ({ ...f, instructor: e.target.value }))} />
              </div>
              <div>
                <label htmlFor="day">Day</label>
                <select id="day" name="day" value={form.day} onChange={e => setForm(f => ({ ...f, day: e.target.value }))}>
                  {DAYS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <input id="time" name="time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
              </div>
              <div>
                <label htmlFor="room">Room</label>
                <input id="room" name="room" value={form.room} onChange={e => setForm(f => ({ ...f, room: e.target.value }))} />
              </div>
            </div>
            <div className="add-actions">
              <button className="auth-submit-button" type="submit">Save Class</button>
            </div>
          </form>
        )}

        <div className="scheduler-layout">
          <aside className="filter-card">
            <div className="filter-title">Filter by Day</div>
            <div className="filter-list">
              <button className={`filter-button ${filterDay === "All" ? "is-active" : ""}`} onClick={() => setFilterDay("All")}>All</button>
              {DAYS.map(d => (
                <button key={d} className={`filter-button ${filterDay === d ? "is-active" : ""}`} onClick={() => setFilterDay(d)}>{d}</button>
              ))}
            </div>
          </aside>

          <section className="classes-list">
            {filtered.map(item => (
              <article key={item.id} className="class-card">
                <header className="class-header">
                  <div>
                    <h3 className="class-title">{item.title}</h3>
                    <div className="class-sub">{item.instructor}</div>
                  </div>
                  <span className="day-pill">{item.day}</span>
                </header>

                <div className="class-meta-row">
                  <div className="meta-item">⏰ {item.time}</div>
                  <div className="meta-item">📍 {item.room}</div>
                </div>

                <div className="class-actions-row">
                  <button className="delete-button" onClick={() => removeClass(item.id)} aria-label="Delete class">🗑️</button>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
