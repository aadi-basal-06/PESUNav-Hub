/*
================================================================================
                    FRONTEND PAGES FOLDER DOCUMENTATION
            Individual Page Components Mapping to Routes in PESUNav Hub
================================================================================

DIRECTORY PURPOSE:
  The pages folder contains one component file per application route. Each
  component represents a full-page view that renders when its corresponding
  route is active. Pages are imported into App.jsx and rendered via React Router.

ROUTE TO COMPONENT MAPPING:

  Route               Component File          Filename        Purpose
  ────────────────────────────────────────────────────��────────────────────
  /                   Home                    Home.jsx        Landing page
  /login              Login                   Login.jsx       Login form
  /register           Register                Register.jsx    Registration form
  /profile            Profile                 Profile.jsx     Profile and scheduler
  /map                Map                     Map.jsx         Campus map
  /study-spaces       StudySpaces             StudySpaces.jsx Study spaces dir
  /feedback           Feedback                Feedback.jsx    Feedback form
  /safety             Safety                  Safety.jsx      Safety info
  /about              About                   About.jsx       About and FAQ
  (unused)            Events                  Events.jsx      Placeholder
  (unused)            Services                Services.jsx    Placeholder


================================================================================
                          FILE: Home.jsx
================================================================================

PURPOSE:
  Landing page displaying PESUNav Hub introduction and branding

COMPONENT STRUCTURE:
  
  export default function Home() {
    return (
      <section className="home-hero">
        <h1>PESUNav Hub</h1>
        <p>Smart campus geolocation and navigation platform</p>
        <img src={logo} alt="PESUNav Hub Logo" className="hero-logo" />
      </section>
    );
  }

IMPORTS:
  import logo from "../assets/img1.png";
    Imports the PESUNav Hub logo image

ELEMENTS:

  <section className="home-hero">
    Container for home page content
    Styled in index.css with:
      - text-align: center
      - padding: 2rem
  
  <h1>PESUNav Hub</h1>
    Main heading
    Styled with h1 styles from index.css (3.2em font size)
  
  <p>Smart campus geolocation and navigation platform</p>
    Subtitle describing the application
  
  <img src={logo} alt="..." className="hero-logo" />
    Logo image with:
      - margin: 1.5rem auto 0
      - width: 150px
      - height: auto
      - display: block (centered)

STATE:
  None - This is a static presentation component

INTERACTIVITY:
  None - Pure presentation

STYLING:
  Classes used:
    - .home-hero       (index.css)
    - .hero-logo       (index.css)

FUTURE ENHANCEMENTS:
  - Add call-to-action button (Register/Login)
  - Add feature highlights
  - Add hero image/background
  - Add testimonials section


================================================================================
                          FILE: Login.jsx
================================================================================

PURPOSE:
  User authentication form for existing users to log in

COMPONENT STRUCTURE:

State Variables:
  const [form, setForm] = useState({ email: "", password: "" });
    Stores email and password input values
  
  const [status, setStatus] = useState(null);
    Stores success/error message from API

Event Handlers:
  
  handleChange(e):
    Updates form state when user types
    Pattern: setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  
  handleSubmit(e):
    Handles form submission
    1. e.preventDefault() - Prevent page reload
    2. Clears previous status message
    3. Makes axios.post("/api/auth/login", form)
    4. Sets status to response message on success
    5. Sets status to error message on failure

JSX STRUCTURE:

  <section className="auth-section">
    Page wrapper with flex centering
  
    <div className="auth-card">
      Card container with padding and shadow
    
      <div className="auth-icon">
        SVG icon (login door symbol)
        aria-hidden="true" (decorative)
      
      <h2 className="auth-heading">Welcome Back</h2>
      <p className="auth-subtext">Login to access your PESUNav Hub account</p>
      
      {status && <p className={`auth-status ${status === "Success" ? "is-success" : "is-error"}`}>{status}</p>}
        Conditionally displays status message
        Green color if success, red if error
      
      <form className="auth-form" onSubmit={handleSubmit}>
        Form inputs:
        
        <label className="field-label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" 
               placeholder="your.email@pes.edu" 
               value={form.email} 
               onChange={handleChange} 
               required />
        
        <label className="field-label" htmlFor="password">Password</label>
        <input id="password" name="password" type="password" 
               placeholder="********" 
               value={form.password} 
               onChange={handleChange} 
               required />
        
        <button type="submit" className="auth-submit-button">Login</button>
      
      <p className="auth-register">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>

STYLING:
  Classes used:
    - .auth-section         (index.css)
    - .auth-card            (index.css)
    - .auth-icon            (index.css)
    - .auth-heading         (index.css)
    - .auth-subtext         (index.css)
    - .auth-status          (index.css) with .is-success or .is-error
    - .auth-form            (index.css)
    - .field-label          (index.css)
    - .auth-submit-button   (index.css)
    - .auth-register        (index.css)
    - .register-link        (index.css)

API INTEGRATION:
  
  POST /api/auth/login
    Request Body:  { email, password }
    Success Response:  { message: "Login successful", user: {...} }
    Error Response:    { message: "Invalid email or password" }
  
  Error Handling:
    Catches network errors
    Displays err?.response?.data?.message || "Error"

IMPORTS:
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import axios from "axios";

ACCESSIBILITY:
  ✓ htmlFor attributes on labels
  ✓ id attributes on inputs
  ✓ type="email" for browser validation
  ✓ type="password" for security
  ✓ aria-hidden on decorative icon

FUTURE ENHANCEMENTS:
  - Remember me checkbox
  - Forgot password link
  - OAuth integration (Google, Microsoft)
  - Loading spinner during submit
  - Form validation feedback
  - Password visibility toggle


================================================================================
                          FILE: Register.jsx
================================================================================

PURPOSE:
  User registration form for new account creation

STATE VARIABLES:

  form:
    name: string
    email: string
    studentId: string (optional)
    department: string
    password: string
    confirmPassword: string
  
  status: string | null (success/error message)

EVENT HANDLERS:

  handleChange(e):
    Updates form fields as user types
    Same pattern as Login.jsx

  handleSubmit(e):
    1. Validates password confirmation
    2. If passwords don't match: sets error status, returns
    3. Creates payload with name, email, password
    4. Posts to /api/auth/register
    5. Sets status message
    6. Handles errors

FORM FIELDS:

  Full Name
    Input type: text
    Required: true
    Placeholder: "John Doe"
  
  Email
    Input type: email
    Required: true
    Placeholder: "your.email@gmail.com"
  
  Student ID (Optional)
    Input type: text
    Required: false
    Placeholder: "PES2UG22CS457"
    Note: Collected but not sent to backend
  
  Department (Dropdown)
    Select element with options:
      - Computer Science (CSE)
      - Electronics (ECE)
      - Computer Science - AIML (CSE-AIML)
      - Business (BBA)
      - Pharmacy (PD)
      - Nursing (NS)
    Note: Selected but not sent to backend
  
  Password
    Input type: password
    Required: true
    Placeholder: "********"
    Note: Not validated for strength
  
  Confirm Password
    Input type: password
    Required: true
    Placeholder: "********"
    Note: Must match password field

FORM VALIDATION:

  Frontend:
    Checks: form.password === form.confirmPassword
    Error: "Passwords do not match"
  
  Backend:
    Validates: name, email, password required
    Validates: email uniqueness
    Password is hashed with bcryptjs

JSX STRUCTURE:

  Similar to Login.jsx with more form fields
  
  <section className="auth-section">
    <div className="auth-card">
      <div className="auth-icon"> (SVG icon - user plus)
      <h2 className="auth-heading">Create Account</h2>
      <p className="auth-subtext">Join PESUNav Hub to get started</p>
      
      {status && <p className={...}>{status}</p>}
      
      <form className="auth-form" onSubmit={handleSubmit}>
        6 input fields with labels
        <button type="submit">Register</button>
      
      <p className="auth-register">
        Already have an account? <Link to="/login">Login here</Link>

STYLING:
  Same auth component styles as Login.jsx

API INTEGRATION:

  POST /api/auth/register
    Request: { name, email, password }
    Note: studentId and department not sent (frontend only)
    Response: { message: "Registration successful" }
    Error: { message: "User already exists" | "Server error" }

IMPORTS:
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import axios from "axios";

ACCESSIBILITY:
  ✓ All inputs have labels with htmlFor
  ✓ All inputs have id attributes
  ✓ type="email" for email validation
  ✓ type="password" for password fields
  ✓ Semantic form structure
  ✓ aria-hidden on decorative icon

FUTURE ENHANCEMENTS:
  - Validate password strength (min 8 chars, mix of types)
  - Validate email format
  - Check password strength in real-time
  - Show password visibility toggle
  - Send collected data (studentId, department) to backend
  - Email verification step
  - Terms of service checkbox
  - Loading spinner during submit


================================================================================
                          FILE: Profile.jsx
================================================================================

PURPOSE:
  Manage student profile information and view/edit class schedule

STATE VARIABLES:

  profile: { fullName, email, studentId, department, imageDataUrl }
    Loaded from localStorage on mount
    Persisted to localStorage on change
  
  previewUrl: string
    Image data URL for avatar preview
  
  classes: Array<{id, title, instructor, day, time, room}>
    Class schedule loaded from localStorage
    Persisted to localStorage on change
  
  filterDay: "All" | "Monday" | ... | "Friday"
    Current filter for class schedule
  
  showAdd: boolean
    Whether to show add class form
  
  form: { title, instructor, day, time, room }
    Form state for adding new class

CONSTANT:

  DAYS: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    Days of the week for filter buttons and day selector

UTILITY FUNCTIONS:

  readLS(key, fallback):
    Reads value from localStorage
    Parses JSON
    Returns fallback if parse fails
  
  writeLS(key, value):
    Writes value to localStorage as JSON
    Wrapped in try/catch (silent fail)

EVENT HANDLERS:

  handleImgChange(e):
    Reads uploaded image file
    Converts to data URL using FileReader
    Updates previewUrl state
  
  handleAddClass(e):
    e.preventDefault()
    Creates new class object with unique ID
    Adds to classes array
    Resets form
    Closes form
  
  removeClass(id):
    Filters out class with matching id
    Updates classes state

EFFECTS:

  useEffect(() => {
    writeLS("studentProfile", {...profile, imageDataUrl: previewUrl})
  }, [profile, previewUrl])
    Persists profile to localStorage whenever it changes
  
  useEffect(() => {
    writeLS("classSchedule", classes)
  }, [classes])
    Persists classes to localStorage whenever changed

MEMOIZATION:

  filtered = useMemo(
    () => filterDay === "All" ? classes : classes.filter(...),
    [classes, filterDay]
  )
    Recalculates filtered list only when dependencies change

JSX STRUCTURE:

  <section className="profile-page">
    
    <div className="profile-header">
      Avatar upload section
      Profile info form (name, email, student ID, department)
    
    <div className="scheduler-section">
      Scheduler header with add button
      Optional: Add class form (if showAdd)
      
      <div className="scheduler-layout">
        <aside className="filter-card">
          Filter buttons for days
        
        <section className="classes-list">
          Grid of class cards with delete buttons

STYLING:
  Classes used:
    - .profile-page
    - .profile-header
    - .avatar-wrapper
    - .avatar-image / .avatar-placeholder
    - .upload-button
    - .profile-info
    - .info-row
    - .scheduler-section
    - .scheduler-header
    - .add-class-form
    - .filter-card
    - .classes-list
    - .class-card
    - .day-pill
    - And more (see index.css)

STORAGE PERSISTENCE:

  localStorage keys:
    "studentProfile" → Entire profile object
    "classSchedule" → Array of class objects
  
  Survives:
    Page reloads
    Browser close/reopen
  
  Clears:
    Cache cleared
    localStorage manually cleared
    Different browser/device

DATA FORMAT:

  studentProfile: {
    fullName: string
    email: string
    studentId: string
    department: string
    imageDataUrl: string (data URL from FileReader)
  }
  
  classSchedule: [
    {
      id: UUID (from crypto.randomUUID())
      title: string
      instructor: string
      day: string
      time: string (HH:mm format)
      room: string
    },
    ...
  ]

IMPORTS:
  import { useEffect, useMemo, useState } from "react";

ACCESSIBILITY:
  ✓ Label associations with htmlFor/id
  ✓ File input with accept="image/*"
  ✓ Time input with type="time"
  ✓ Select for day selection
  ✓ Delete button with aria-label
  ✓ Grid layout proper structure

FUTURE ENHANCEMENTS:
  - Connect to backend for data persistence
  - Add more profile fields (phone, bio, etc.)
  - Add class recurrence (repeating classes)
  - Add class reminders/notifications
  - Add undo/redo for changes
  - Add export schedule to calendar
  - Add sharing schedule with friends
  - Add photo cropping
  - Add validation for class times


================================================================================
                          FILE: Map.jsx
================================================================================

PURPOSE:
  Display interactive campus map with study space locations using Leaflet

STATE VARIABLES:

  selectedSpace: null | { id, name, ... }
    Currently selected study space (for highlighting)

CONSTANTS:

  studySpaces: Array<{id, name, coordinates, description, type}>
    5 hardcoded campus study spaces
    
    Fields:
      id: 1-5
      name: Space name
      coordinates: [latitude, longitude]
      description: Brief description
      type: "library" | "study_area" | "cafe" | "lab" | "discussion"
  
  campusCenter: [12.9265, 77.5997]
    Default map center (campus location)

HELPER FUNCTIONS:

  createCustomIcon(type):
    Creates Leaflet custom icon based on space type
    Returns L.divIcon with:
      - Background color based on type
      - Emoji marker (📍)
      - Size: 32x32px
      - Border styling

MAP CONFIGURATION:

  <MapContainer center={campusCenter} zoom={18}>
    center: Center coordinates
    zoom: 18 (very detailed view)
    scrollWheelZoom: true (allow mouse wheel zoom)
  
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
    OpenStreetMap tiles
    Attribution required by OSM license
  
  <Marker position={coordinates} icon={customIcon} onClick={...}>
    <Popup> - Shows on marker click
      <h3>{name}</h3>
      <p>{description}</p>

JSX STRUCTURE:

  <section className="map-page">
    <div className="map-header">
      <h2>Campus Map - Study Spaces</h2>
      <p>Explore available study locations across the campus</p>
    
    <div className="map-container">
      <MapContainer>
        <TileLayer />
        {studySpaces.map(space => (
          <Marker key={space.id} onClick={() => setSelectedSpace(space)}>
            <Popup>...</Popup>
          </Marker>
        ))}
      </MapContainer>
    
    <div className="spaces-list">
      <h3>Available Study Spaces</h3>
      <div className="spaces-grid">
        {studySpaces.map(space => (
          <div key={space.id} 
               className={`space-card ${selectedSpace?.id === space.id ? "active" : ""}`}
               onClick={() => setSelectedSpace(space)}>
            <h4>{space.name}</h4>
            <span className={`space-type-badge ${space.type}`}>{space.type}</span>
            <p>{space.description}</p>
            <small>📍 {coordinates}</small>
          </div>
        ))}
      </div>

STYLING:
  Classes used:
    - .map-page
    - .map-header
    - .map-container
    - .map-view (MapContainer className)
    - .spaces-list
    - .spaces-grid
    - .space-card
    - .space-type-badge
    (See Map.css)

DATA STRUCTURE:

  Current: Hardcoded array in component
  
  Ready for: Backend integration
    GET /api/study-spaces
    Returns: Array of study space objects

IMPORTS:
  import { useState } from "react";
  import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
  import L from "leaflet";
  import "../styles/Map.css";

FUTURE ENHANCEMENTS:
  - Connect to backend for real data
  - Add search/filter by space type
  - Add routing/directions
  - Add availability real-time updates
  - Add user ratings and reviews
  - Add booking functionality
  - Add real-time occupancy
  - Add photos of spaces


================================================================================
                          FILE: StudySpaces.jsx
================================================================================

PURPOSE:
  Browse and filter campus study spaces with detailed information

STATE VARIABLES:

  selectedType: "all" | "library" | "study_area" | "cafe" | "lab" | "discussion"
    Current filter selection
  
  selectedSpace: null | study space object
    Currently selected space for detail panel

CONSTANTS:

  studySpacesData: Array<{id, name, type, description, features, capacity, hours, location}>
    5 hardcoded study spaces with detailed information
    
    Fields:
      id: 1-5
      name: Space name
      type: Space type (matching filter keys)
      description: Brief description
      features: Array of feature strings
      capacity: Capacity description (e.g., "500+")
      hours: Operating hours
      location: Campus location description
  
  typeLabels: {
    library: "📚 Library",
    study_area: "📖 Study Areas",
    cafe: "☕ Cafe",
    lab: "🔬 Lab",
    discussion: "💬 Discussion Spaces"
  }
    Display labels with emoji for each type

EVENT HANDLERS:

  setSelectedType(type):
    Updates filter selection
  
  setSelectedSpace(space):
    Updates selected space for detail panel

COMPUTED VALUES:

  filteredSpaces:
    Returns all spaces if selectedType === "all"
    Otherwise filters by type

JSX STRUCTURE:

  <section className="study-spaces-page">
    <div className="spaces-header">
      Title and description
    
    <div className="filter-section">
      Filter buttons for each type
      Active button highlighted
    
    <div className="spaces-content">
      <div className="spaces-showcase">
        Grid of space cards
        Click to select and open detail panel
      
      {selectedSpace && (
        <div className="space-details-panel">
          Detailed information panel
          Features list
          Details grid
          Navigate button
      )}

DETAIL PANEL INFORMATION:

  When space is selected:
    - Space name and type badge
    - Full description
    - Features list (bulleted)
    - Location, capacity, hours, type in grid
    - "Navigate to this space" button

STYLING:
  Classes used:
    - .study-spaces-page
    - .spaces-header
    - .filter-section
    - .filter-btn (.active)
    - .spaces-content
    - .spaces-showcase
    - .space-showcase-card (.selected)
    - .space-details-panel
    - .details-content
    (See StudySpaces.css)

IMPORTS:
  import { useState } from "react";
  import "../styles/StudySpaces.css";

DATA STRUCTURE:

  Current: Hardcoded array in component
  
  Ready for: Backend integration
    GET /api/study-spaces
    Supports filtering by type

ACCESSIBILITY:
  ✓ Button elements for filters
  ✓ Semantic structure (sections, headings)
  ✓ Keyboard navigable

FUTURE ENHANCEMENTS:
  - Connect to backend for live data
  - Add real-time availability
  - Add booking/reservation
  - Add user ratings
  - Add photos/images
  - Add opening hours validation
  - Add capacity indicator
  - Add search functionality


================================================================================
                          FILE: Feedback.jsx
================================================================================

PURPOSE:
  Collect user feedback and display contact information

STATE VARIABLES:

  form: { name, email, subject, message }
    Form input state
  
  submitted: boolean
    Whether form was submitted (for success message)

EVENT HANDLERS:

  handleChange(e):
    Updates form field state
  
  handleSubmit(e):
    1. Prevents default form submission
    2. Validates all fields filled
    3. Sets submitted = true
    4. Resets form
    5. Auto-hides success message after 5 seconds

FORM VALIDATION:

  Checks: All fields filled (name, email, subject, message)
  Shows: alert("Please fill in all fields") if validation fails
  Note: Backend integration not yet implemented

JSX STRUCTURE:

  <section className="feedback-page">
    <div className="feedback-header">
      Title and description
    
    <div className="feedback-content">
      <div className="feedback-form-container">
        <h3>Send us a Message</h3>
        {submitted && <div className="success-message">Thank you message</div>}
        
        <form className="feedback-form" onSubmit={handleSubmit}>
          4 form fields:
            - Full Name (text)
            - Email Address (email)
            - Subject (text)
            - Message (textarea)
      
      <div className="contact-info-container">
        <h3>Contact Information</h3>
        
        5 contact cards:
          - Email card
          - Phone card
          - Office Location card
          - Office Hours list
          - Social Media links
        
        FAQ section with 3 Q&As

CONTACT INFORMATION:

  Email:
    support@pesunavhub.edu
    For general inquiries and support
  
  Phone:
    +91 98765 43210
    Monday - Friday, 9:00 AM - 5:00 PM
  
  Office Location:
    PES University
    Electronics City Campus
    Bangalore, India
    Student Services Building, Ground Floor
  
  Office Hours:
    Monday - Friday: 9:00 AM - 5:00 PM
    Saturday: 10:00 AM - 2:00 PM
    Sunday: Closed
  
  Social Media:
    Facebook, Twitter, Instagram, LinkedIn

FAQ SECTION:

  3 questions with answers:
    - How do I report a bug or issue?
    - How long does it take to get a response?
    - Can I suggest new features?

STYLING:
  Classes used:
    - .feedback-page
    - .feedback-header
    - .feedback-content
    - .feedback-form-container
    - .success-message
    - .feedback-form
    - .form-group
    - .contact-info-container
    - .contact-card
    - .faq-section
    (See Feedback.css)

IMPORTS:
  import { useState } from "react";
  import "../styles/Feedback.css";

CURRENT BEHAVIOR:

  Form submission:
    - Shows success message
    - Clears form
    - Message disappears after 5 seconds
  
  Note: Form data not sent to backend (placeholder only)

FUTURE ENHANCEMENTS:
  - Connect to backend: POST /api/feedback
  - Send email notification
  - Store feedback in database
  - Add form validation with feedback
  - Add file attachment support
  - Add category/priority selection
  - Add response tracking
  - Add live chat support


================================================================================
                          FILE: Safety.jsx
================================================================================

PURPOSE:
  Provide campus safety information, emergency procedures, and contacts

STATE VARIABLES:

  activeTab: string
    Currently selected safety procedure category

CONSTANTS:

  emergencyContacts: Array<{title, number, description, icon}>
    4 emergency contact options with phone numbers
  
  safetyProcedures: Array<{title, tips}>
    6 categories of safety procedures:
      1. Personal Safety
      2. Building Safety
      3. Event Safety
      4. Digital Safety
      5. Travel Safety
      6. Health & Wellness
    Each with 6 tips/guidelines
  
  importantNumbers: Array<{label, number}>
    5 important emergency numbers

JSX STRUCTURE:

  <section className="safety-page">
    <div className="safety-header">
      Title and description
    
    <div className="emergency-banner">
      Emergency number 112 with explanation
    
    <div className="quick-contacts">
      <h3>Quick Emergency Contacts</h3>
      Grid of 4 contact cards:
        - Police
        - Campus Security
        - Medical Emergency
        - Fire Department
      
      Each card:
        - Icon emoji
        - Title
        - Phone number (clickable href)
        - Description
    
    <div className="procedures-section">
      Tab-based procedure browser
      
      <div className="tabs">
        6 tab buttons for each procedure
      
      <div className="procedures-content">
        Shows selected procedure with tips list
    
    <div className="info-boxes">
      2 info boxes:
        1. Important Numbers Table
           - Clickable phone links
        2. Campus Safety Resources
           - Listed resources
    
    <div className="safety-tips">
      6 numbered tip cards:
        1. Stay Alert
        2. Travel in Groups
        3. Know Emergency Exits
        4. Secure Your Belongings
        5. Use Buddy System
        6. Report Incidents
    
    <div className="footer-note">
      Footer with campus security contact

EMERGENCY CONTACTS:

  Police               112
  Campus Security      +91 80 40 92 5555
  Medical Emergency    102
  Fire Department      101

SAFETY PROCEDURE CATEGORIES:

  Personal Safety     (6 tips on awareness, travel, valuables, instincts)
  Building Safety     (6 tips on exits, locks, buddy system, alarms)
  Event Safety        (6 tips on group attendance, contacts, hydration)
  Digital Safety      (6 tips on passwords, phishing, updates, devices)
  Travel Safety       (6 tips on location sharing, transportation, items)
  Health & Wellness   (6 tips on health checks, facilities, mental health)

STYLING:
  Classes used:
    - .safety-page
    - .safety-header
    - .emergency-banner
    - .quick-contacts
    - .contact-box
    - .procedures-section
    - .tabs-header
    - .tabs
    - .tab-btn (.active)
    - .procedures-content
    - .info-boxes
    - .info-box
    - .safety-tips
    - .tip-card
    (See Safety.css)

IMPORTS:
  import { useState } from "react";
  import "../styles/Safety.css";

EVENT HANDLERS:

  setActiveTab(procedure.title):
    Updates which procedure tab is displayed
    Clicking tab button updates state

INTERACTIVITY:

  Clickable phone numbers:
    <a href={`tel:${contact.number}`}>
    Opens phone app on mobile
  
  Tab buttons:
    Click to switch between procedure categories
    Selected tab highlighted as active

ACCESSIBILITY:
  ✓ Semantic structure (sections, headings)
  ✓ Clickable phone links with tel: protocol
  ✓ List structure for safety tips
  ✓ Button elements for tabs
  ✓ Proper heading hierarchy

FUTURE ENHANCEMENTS:
  - Add emergency alert notifications
  - Add incident reporting form
  - Add safety hotline chatbot
  - Add campus police integration
  - Add emergency location sharing
  - Add safety map with help points
  - Add emergency contacts per building
  - Add safety tips push notifications


================================================================================
                          FILE: About.jsx
================================================================================

PURPOSE:
  Provide information about PESUNav Hub, its features, and vision

CONSTANTS:

  features: Array<{icon, title, description}>
    6 key features of the application:
      1. Interactive Campus Map
      2. Study Spaces Directory
      3. Student Profile
      4. Secure Authentication
      5. Responsive Design
      6. Safety Information
  
  team: Array<{role, description}>
    3 technology areas:
      1. Product & Development
      2. Design & UX
      3. Campus Integration

JSX STRUCTURE:

  <section className="about-page">
    <div className="hero-section">
      Title: "PESUNav Hub"
      Subtitle: "Smart Campus Navigation & Information Platform"
      Description of purpose
    
    <div className="about-content">
      
      <div className="mission-section">
        Explains the mission and purpose
      
      <div className="features-section">
        Grid of 6 feature cards:
          - Icon emoji
          - Title
          - Description
      
      <div className="how-it-works">
        4-step process:
          1. Create Account
          2. Explore Campus
          3. Plan Your Day
          4. Stay Safe
      
      <div className="team-section">
        Actually "Technology Stack" section with 3 cards
      
      <div className="values-section">
        4 core values:
          - Student-Centric
          - Safety First
          - Accessible
          - Innovative
      
      <div className="faq-section">
        6 FAQ items:
          1. Is my information secure?
          2. Can I access the map offline?
          3. How often is campus data updated?
          4. Who should I contact for issues?
          5. Can I access on mobile?
          6. Is this platform official?
      
      <div className="contact-cta">
        Call-to-action linking to Feedback page
    
    <footer className="about-footer">
      Copyright and credit

FEATURES GRID:

  Cards display with icon emoji, title, and description

KEY FEATURES:
  1. 🗺️ Interactive Campus Map
  2. 📚 Study Spaces Directory
  3. 👤 Student Profile
  4. 🔐 Secure Authentication
  5. 📱 Responsive Design
  6. 🛡️ Safety Information

HOW IT WORKS:

  4-step numbered process explaining user journey
  Each step has title and description

TECHNOLOGY STACK:

  Lists:
    - Product & Development: React, Node.js, Express, MongoDB
    - Design & UX: User-centric design, accessibility focus
    - Campus Integration: Campus data, OpenStreetMap

VALUES:

  4 core values with icons and descriptions:
    - Student-Centric
    - Safety First
    - Accessible
    - Innovative

FAQ:

  6 common questions with comprehensive answers
  Topics: Security, offline access, data updates, support, mobile, official status

STYLING:
  Classes used:
    - .about-page
    - .hero-section
    - .about-content
    - .mission-section
    - .features-section
    - .features-grid
    - .feature-card
    - .how-it-works
    - .steps
    - .step
    - .team-section
    - .team-grid
    - .team-card
    - .values-section
    - .values-grid
    - .value-item
    - .faq-section
    - .faq-items
    - .faq-item
    - .contact-cta
    - .cta-button
    - .about-footer
    (See About.css)

IMPORTS:
  import "../styles/About.css";

INTERACTIVITY:

  Contact CTA button:
    Links to /feedback page
    Encourages user to contact

ACCESSIBILITY:
  ✓ Semantic HTML structure
  ✓ Proper heading hierarchy
  ✓ Links with href attributes
  ✓ List structure for features and values

FUTURE ENHANCEMENTS:
  - Add team member profiles with photos
  - Add company timeline/history
  - Add press releases
  - Add blog or news section
  - Add developer documentation
  - Add API documentation
  - Add roadmap for future features
  - Add user testimonials
  - Add partner logos


================================================================================
                          FILE: Events.jsx
================================================================================

PURPOSE:
  Placeholder for campus events functionality

CURRENT IMPLEMENTATION:

  export default function Events() {
    return null;
  }

STATUS:
  Not implemented
  Component exists but renders nothing

FUTURE IMPLEMENTATION:

  Should display:
    - List of campus events
    - Event details (date, time, location)
    - Event registration/RSVP
    - Event filtering and search
    - Calendar view of events
    - Event notification reminders


================================================================================
                          FILE: Services.jsx
================================================================================

PURPOSE:
  Placeholder for campus services functionality

CURRENT IMPLEMENTATION:

  export default function Services() {
    return null;
  }

STATUS:
  Not implemented
  Component exists but renders nothing

FUTURE IMPLEMENTATION:

  Should display:
    - List of campus services
    - Service descriptions
    - Service contact information
    - Service availability/hours
    - Service booking/scheduling
    - Service ratings and reviews


================================================================================
                    COMPONENT PATTERNS AND CONVENTIONS
================================================================================

IMPORT ORDER:

  1. React and external libraries first
  2. React Router imports
  3. Internal components
  4. Styles

COMPONENT FUNCTION PATTERN:

  export default function PageName() {
    // State declarations
    const [state, setState] = useState(...);
    
    // Effects
    useEffect(() => {
      // Side effects
    }, [dependencies]);
    
    // Handlers
    const handleAction = (e) => {
      // Logic
    };
    
    // JSX return
    return (
      <section>
        {/* Content */}
      </section>
    );
  }

FORM HANDLING PATTERN:

  State for form:
    const [form, setForm] = useState({ field1: "", field2: "" });
  
  Change handler:
    const handleChange = (e) => {
      setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
  
  Submit handler:
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validation and submission logic
    };

LIST RENDERING PATTERN:

  {items.map(item => (
    <div key={item.id} className="item-card">
      {item.data}
    </div>
  ))}

CONDITIONAL RENDERING PATTERN:

  {condition && <Component />}
  {condition ? <ComponentA /> : <ComponentB />}


================================================================================
                    END OF PAGES DOCUMENTATION
================================================================================
*/
