/*
================================================================================
                    FRONTEND SRC FOLDER DOCUMENTATION
              Source Code Directory for React Components and Styles
================================================================================

DIRECTORY PURPOSE:
  The src folder is the source code root for the React application. It contains
  React components, styles, assets, and all application logic. Files in this
  directory are compiled, bundled, and transformed by Vite during build.

DIRECTORY STRUCTURE:

src/
├── main.jsx                 React entry point (render root component)
├── App.jsx                  Root component (routing and navigation)
├── index.css               Global styles and design system
├── App.css                 App-level component styles
│
├── pages/                   Page components (one per route)
│   ├── Home.jsx            Landing page
│   ├── Login.jsx           Login form
│   ├── Register.jsx        Registration form
│   ├── Profile.jsx         Student profile and scheduler
│   ├── Map.jsx             Interactive campus map
│   ├── StudySpaces.jsx     Study space directory
│   ├── Feedback.jsx        Feedback and contact form
│   ├── Safety.jsx          Safety information and procedures
│   ├── About.jsx           About page and FAQ
│   ├── Events.jsx          Events page (empty)
│   └── Services.jsx        Services page (empty)
│
├── styles/                  Page-specific CSS files
│   ├── Map.css
│   ├── Feedback.css
│   ├── Safety.css
│   ├── StudySpaces.css
│   └── About.css
│
└── assets/                  Static assets (images, etc.)
    └── img1.png             PESUNav Hub logo


================================================================================
                          MAIN FILES IN SRC/
================================================================================

1. main.jsx
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: React application entry point and bootstrapping
   
   IMPORTS:
     import React from "react";
       React library for component rendering
     
     import ReactDOM from "react-dom/client";
       React DOM rendering engine
     
     import { BrowserRouter } from "react-router-dom";
       Router provider for navigation
     
     import App from "./App";
       Root component with routes
     
     import './index.css';
       Global styles
   
   KEY FUNCTIONALITY:
   
     ReactDOM.createRoot(document.getElementById("root"))
       - Gets the #root div from index.html
       - Creates React root for mounting
       - Single mount point for entire app
   
     .render(
       <React.StrictMode>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </React.StrictMode>
     )
       - React.StrictMode: Development-only wrapper
         * Highlights potential issues
         * Double-renders components (intentional)
         * Warns about deprecated APIs
       
       - BrowserRouter: Enables routing
         * Provides routing context to App
         * Enables Link components
         * Manages URL/browser history
       
       - App: Root component
         * Contains all routes
         * Provides navigation
   
   RESPONSIBILITY:
     Single responsibility: Bootstrap the React application
     Does not contain any components or logic
     Called exactly once when app loads


2. App.jsx
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Root component with navigation and routing
   
   IMPORTS:
     import { Routes, Route, Link } from "react-router-dom";
     import Home from "./pages/Home";
     import Login from "./pages/Login";
     import Register from "./pages/Register";
     import Profile from "./pages/Profile";
     import Map from "./pages/Map";
     import StudySpaces from "./pages/StudySpaces";
     import Feedback from "./pages/Feedback";
     import Safety from "./pages/Safety";
     import About from "./pages/About";
   
   STRUCTURE:
   
     <div className="app-container">
       Main container wrapper for entire app
   
       <nav className="nav-bar">
         Navigation bar with 9 Links
         Links: Home, Login, Register, Profile, Map, Study Spaces,
                Feedback, Safety, About
       
       <hr />
         Divider line
       
       <main className="content-area">
         Routes component for conditional rendering
         9 Route definitions matching navigation links
   
   ROUTING TABLE:
     Route           Component        Purpose
     /               Home             Landing page
     /login          Login            Login form
     /register       Register         Registration form
     /profile        Profile          Student profile and scheduler
     /map            Map              Interactive campus map
     /study-spaces   StudySpaces      Study space directory
     /feedback       Feedback         Feedback and contact
     /safety         Safety           Safety information
     /about          About            About and FAQ
   
   RESPONSIBILITY:
     - Layout and structure
     - Navigation bar
     - Routing configuration
     - Component conditional rendering


3. index.css
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Global styles, design system, and CSS variables
   
   STRUCTURE:
     1. Font imports
     2. CSS custom properties (color palette)
     3. Global element styles
     4. Component styles
     5. Media queries
   
   CSS CUSTOM PROPERTIES (Design System):
     Colors:
       --color-navy-blue: #12214A         Primary background
       --color-medium-navy: #1C2A6D       Navigation background
       --color-light-navy: #6A7CB0        Muted highlights
       --color-dark-grey: #2D3748         Primary text/borders
       --color-medium-grey: #4A5568       Secondary text
       --color-white: #FFFFFF             Content background
       --color-golden-yellow: #FFD700     Focus indicators
   
   GLOBAL ELEMENT STYLES:
     :root                  Apply custom properties
     body                   Base font, background, layout
     a                      Link styling and hover
     h1-h5                  Heading styles
     button                 Button styling
     input, textarea, select Form input styling
     nav                    Navigation bar styling
   
   APP-LEVEL COMPONENT STYLES:
     .app-container         Main wrapper
     .nav-bar              Navigation bar
     .content-area         Main content section
     .home-hero            Home page styling
     .auth-section         Login/Register page wrapper
     .auth-card            Form card styling
     .profile-page         Profile page layout
     .scheduler-section    Scheduler component
     And many more component styles...
   
   MEDIA QUERIES:
     Breakpoint: max-width: 860px
     Changes:
       - Grid layouts switch to single column
       - Navigation adjusts
       - Forms reflow
   
   IMPORTS:
     @import url('https://fonts.googleapis.com/css2?family=Open+Sans:...')
     Loads Open Sans font from Google Fonts


4. App.css
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Component-specific styles (currently empty)
   
   NOTE: Most styles consolidated in index.css
   
   USAGE:
     import "./App.css";
     Ensures styles load with App component


================================================================================
                    SUBDIRECTORY: pages/
================================================================================

PURPOSE:
  Contains Page components, one for each route in the application.
  Each page component is a full-screen section representing a route.

FILE PATTERN:

Each page file:
  1. Is a functional React component
  2. Exports a default component
  3. May import sub-components or styles
  4. Uses hooks (useState, useEffect, etc.) as needed
  5. Uses localStorage for persistence (Profile.jsx)
  6. Makes API calls (Login.jsx, Register.jsx)
  7. Contains hardcoded data (Map.jsx, StudySpaces.jsx)

PAGES OVERVIEW:

1. Home.jsx                   Landing page
2. Login.jsx                  User authentication form
3. Register.jsx              Account creation form
4. Profile.jsx               Student profile and class scheduler
5. Map.jsx                   Interactive campus map
6. StudySpaces.jsx           Study space directory
7. Feedback.jsx              Feedback form and contact info
8. Safety.jsx                Safety information and procedures
9. About.jsx                 About page and FAQ
10. Events.jsx               Empty placeholder
11. Services.jsx             Empty placeholder

SEE: pages/DOCUMENTATION.md for detailed information about each page


================================================================================
                    SUBDIRECTORY: styles/
================================================================================

PURPOSE:
  Contains CSS stylesheets for individual page components.
  Each file styles one page component.

FILES:

  Map.css                     Styles for Map.jsx
  Feedback.css              Styles for Feedback.jsx
  Safety.css                Styles for Safety.jsx
  StudySpaces.css           Styles for StudySpaces.jsx
  About.css                 Styles for About.jsx

IMPORT PATTERN:

In page component:
  import "../styles/Map.css";

In page file:
  <section className="map-page">
    ...
  </section>

NAMING CONVENTION:

  Component class names derive from component name:
    Map.jsx        → .map-page (container class)
    Feedback.jsx   → .feedback-page
    Safety.jsx     → .safety-page
    StudySpaces.jsx → .study-spaces-page
    About.jsx      → .about-page

ORGANIZATION:

Each CSS file:
  - Styles for single page component
  - Scoped to page container class
  - Uses CSS custom properties from index.css
  - Defines layout with grid/flexbox
  - Responsive media queries
  - Component-specific utility classes

SEE: styles/DOCUMENTATION.md for detailed CSS information


================================================================================
                    SUBDIRECTORY: assets/
================================================================================

PURPOSE:
  Static images and media files used in components

FILES:

  img1.png                    PESUNav Hub logo
    Used in: Home.jsx
    Alt text: "PESUNav Hub Logo"
    Dimensions: 150x150px
    Format: PNG with transparency

IMPORTING ASSETS:

Pattern:
  import logo from "../assets/img1.png";
  <img src={logo} alt="Description" />

Benefits:
  - Webpack/Vite processes image
  - Adds content hash to filename
  - Cache busting on changes
  - Bundled with code

FUTURE ASSETS:

Potential images to add:
  - Team photos
  - Campus landmarks
  - Feature illustrations
  - Social media icons
  - Map icons


================================================================================
                    MODULE IMPORTS AND DEPENDENCIES
================================================================================

REACT IMPORTS:

import React from "react";
  Component base class (function components don't need this in newer React)

import { useState, useEffect, useMemo, useCallback } from "react";
  React hooks for state and effects

REACT ROUTER:

import { Routes, Route, Link } from "react-router-dom";
  Routing components in App.jsx

import { useNavigate, useLocation } from "react-router-dom";
  Navigation hooks (for future use)

EXTERNAL LIBRARIES:

import axios from "axios";
  HTTP client in Login.jsx, Register.jsx

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
  Mapping components in Map.jsx

INTERNAL IMPORTS:

import "./index.css";
  Global styles

import "../styles/Map.css";
  Component-specific styles

import logo from "../assets/img1.png";
  Static assets


================================================================================
                    CODE STYLE AND CONVENTIONS
================================================================================

REACT COMPONENTS:

Function Declaration:
  export default function ComponentName() {
    return (
      <div>...</div>
    );
  }

Hooks Usage:
  const [state, setState] = useState(initialValue);
  const [count] = useState(() => expensiveCalculation());
  
  useEffect(() => {
    // Side effect
    return () => {
      // Cleanup
    };
  }, [dependency]);

Event Handlers:
  const handleChange = (e) => {
    setState(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form
  };

Conditional Rendering:
  {condition && <Component />}
  {condition ? <ComponentA /> : <ComponentB />}

Mapping Lists:
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}

CSS CLASS NAMING:

  Semantic Names:
    - .profile-page      (page container)
    - .scheduler-section (major section)
    - .class-card        (individual card)
    - .filter-button     (interactive element)
  
  BEM-like Convention:
    - .auth-section (block)
    - .auth-card (element)
    - .auth-card.is-active (modifier)
  
  Avoid:
    - .div-1, .section-2 (non-semantic)
    - camelCase (use kebab-case)
    - Deeply nested selectors


================================================================================
                    STATE MANAGEMENT PATTERNS
================================================================================

SIMPLE STATE:

const [isOpen, setIsOpen] = useState(false);
const handleToggle = () => setIsOpen(!isOpen);

FORM STATE:

const [form, setForm] = useState({
  name: "",
  email: "",
  password: ""
});

const handleChange = (e) => {
  setForm(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

ARRAY STATE:

const [items, setItems] = useState([]);

const addItem = (newItem) => {
  setItems(prev => [...prev, newItem]);
};

const removeItem = (id) => {
  setItems(prev => prev.filter(item => item.id !== id));
};

ASYNC STATE:

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchData = async () => {
  setLoading(true);
  try {
    const res = await axios.get("/api/data");
    setData(res.data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


================================================================================
                    ERROR HANDLING PATTERNS
================================================================================

TRY/CATCH WITH API:

try {
  const res = await axios.post("/api/auth/login", form);
  setStatus("Login successful");
} catch (err) {
  const message = err?.response?.data?.message || "Error";
  setStatus(message);
}

CONDITIONAL ERROR DISPLAY:

{error && (
  <div className="error-message">
    {error}
  </div>
)}

VALIDATION BEFORE SUBMIT:

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!form.email || !form.password) {
    setError("Please fill all fields");
    return;
  }
  
  // Proceed with submission
};


================================================================================
                    PERFORMANCE OPTIMIZATION PATTERNS
================================================================================

MEMOIZATION:

const filtered = useMemo(
  () => items.filter(item => item.category === selected),
  [items, selected]
);

Benefit: Prevents recalculation on every render

CALLBACK MEMOIZATION:

const handleDelete = useCallback(
  (id) => setItems(prev => prev.filter(item => item.id !== id)),
  []
);

Benefit: Stable function reference for child components

LOCAL STORAGE USAGE:

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

Benefit: Persist state across page reloads


================================================================================
                    ACCESSIBILITY CONSIDERATIONS
================================================================================

SEMANTIC HTML:

Use semantic elements:
  <section>       Section of content
  <article>       Article content
  <header>        Header area
  <nav>           Navigation
  <main>          Main content
  <footer>        Footer
  <button>        Clickable elements
  <label>         Form labels

ARIA ATTRIBUTES:

<div className="avatar-placeholder" aria-hidden="true" />
  Hides decorative elements from screen readers

<div className="auth-icon" aria-hidden="true">
  <svg>...</svg>
</div>
  Decorative SVG hidden from accessibility tree

<button aria-label="Delete class">🗑️</button>
  Provides label for icon-only button

FORM ACCESSIBILITY:

<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" />
  Associates label with input

<input id="name" name="name" required />
  HTML5 required attribute

KEYBOARD NAVIGATION:

<button onClick={handleClick}>
  Clickable and keyboard-accessible

<input type="email" />
  Native input types for mobile optimization


================================================================================
                    DEVELOPMENT WORKFLOW
================================================================================

CREATE NEW COMPONENT:

1. Create file in src/pages/FileName.jsx
2. Create styles in src/styles/FileName.css
3. Import component in App.jsx
4. Add Route in App.jsx routing section
5. Add Link in nav-bar
6. Use React hooks for state management
7. Import styles at top of component

TEST COMPONENT:

1. Dev server running: npm run dev
2. Navigate to route in browser
3. Test interactions and state changes
4. Check browser console for errors
5. Use React DevTools to inspect component

STYLE COMPONENT:

1. Create .FileName.css file
2. Use semantic class names
3. Import in component: import "../styles/FileName.css"
4. Use CSS custom properties from index.css
5. Test responsive design at breakpoint
6. Ensure mobile-friendly layout


================================================================================
                    BUNDLING AND COMPILATION
================================================================================

VITE BUILD PROCESS:

1. Starts from src/main.jsx
2. Resolves all imports
3. Processes JSX to JavaScript
4. Transpiles modern JS to compatible syntax
5. Bundles code and dependencies
6. Minifies and optimizes
7. Outputs to dist/ folder

Development Mode:
  - Source maps for debugging
  - Hot module replacement
  - Unminified code
  - Faster rebuilds

Production Mode:
  - Minified code
  - No source maps
  - Hashed filenames
  - Optimized bundles


================================================================================
                    FUTURE ENHANCEMENTS
================================================================================

COMPONENT IMPROVEMENTS:

1. Add TypeScript for type safety
2. Extract reusable components
3. Create component library
4. Add Storybook for documentation
5. Add unit tests with Jest/Vitest
6. Add integration tests

FEATURE ADDITIONS:

1. Implement Events page
2. Implement Services page
3. Add user authentication persistence
4. Add dark mode toggle
5. Add search functionality
6. Add filtering and sorting
7. Add pagination

STATE MANAGEMENT:

1. Consider Redux/Context for complex state
2. Add state persistence across tabs
3. Implement proper session management
4. Add offline support with Service Workers

STYLING:

1. Add CSS animations
2. Add loading skeletons
3. Add toast notifications
4. Improve mobile responsiveness
5. Add accessibility improvements


================================================================================
                    END OF SRC DOCUMENTATION
================================================================================
*/
