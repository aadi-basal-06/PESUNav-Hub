/*
================================================================================
                    FRONTEND DIRECTORY DOCUMENTATION
         React Vite Application for PESUNav Hub Smart Campus Navigation
================================================================================

DIRECTORY PURPOSE:
  The frontend folder contains the React application built with Vite that
  provides the user interface for PESUNav Hub. It handles routing, page rendering,
  state management, and communication with the backend API.

TECH STACK:
  - React 19.1.1              Modern React with hooks
  - Vite 7.1.7                Lightning-fast build tool
  - React Router 7.9.4        Client-side routing
  - Axios 1.13.2              HTTP client for API calls
  - Leaflet 1.9.4             Interactive mapping
  - React Leaflet 5.0.0       React bindings for maps
  - Open Sans Font            Typography via Google Fonts
  - CSS3                      Custom properties and responsive design


================================================================================
                    MAIN FILES IN FRONTEND/
================================================================================

1. package.json
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Frontend project metadata and dependencies
   
   PROJECT METADATA:
     name: "frontend"
     private: true              Package won't be published to npm
     type: "module"             Use ES6 modules (import/export)
     version: "0.0.0"
   
   SCRIPTS:
     "dev":     vite            Start development server with hot reload
     "build":   vite build      Create optimized production build
     "lint":    eslint .        Check code quality with ESLint
     "preview": vite preview    Preview production build locally
   
   DEPENDENCIES:
     axios 1.13.2              HTTP client
       - Makes API calls to backend
       - Used in Login, Register, Feedback pages
     
     leaflet 1.9.4             JavaScript mapping library
       - Core mapping functionality
       - Renders OpenStreetMap tiles
     
     react 19.1.1              JavaScript library for UI
       - Component framework
       - Hooks for state and effects
     
     react-dom 19.1.1          React rendering to DOM
       - Mounts React components
       - Manages virtual DOM
     
     react-leaflet 5.0.0       React wrapper for Leaflet
       - MapContainer component
       - Marker, TileLayer components
     
     react-router-dom 7.9.4    Client-side routing
       - BrowserRouter for app routing
       - Routes, Route components
       - Link components for navigation
   
   DEV DEPENDENCIES:
     Vite plugins for React development
     ESLint for code quality
     TypeScript type definitions


2. index.html
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: HTML entry point for React application
   
   STRUCTURE:
     <!DOCTYPE html>            HTML5 declaration
     <html>                      Root element
       <head>                    Metadata
         <meta charset>          UTF-8 encoding
         <link rel="icon">       Favicon (vite.svg)
         <meta name="viewport">  Mobile responsive
         <title>Vite App</title>
         <script type="module">  loads main.jsx
       <body>                    Content
         <div id="root"></div>   React mount point
   
   KEY ELEMENT:
     <div id="root"></div>       Where React renders
                                 Referenced in main.jsx with
                                 ReactDOM.createRoot()
   
   SCRIPT:
     <script type="module" src="/src/main.jsx"></script>
     Loads the React entry point (main.jsx)


3. vite.config.js
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Vite build tool configuration
   
   CONFIGURATION DETAILS:
     export default defineConfig({
       plugins: [react()]        Enable React plugin for JSX, hot refresh
     })
   
   EFFECTS:
     - Enables JSX syntax support
     - Enables React Fast Refresh (hot module replacement)
     - Configures development server
     - Configures build optimization
     - Sets up module resolution


4. eslint.config.js
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: ESLint code quality configuration
   
   RULES CONFIGURED:
     - JavaScript recommended rules
     - React recommended rules
     - React Hooks rules
     - React Refresh rules
   
   PURPOSE:
     - Catches common mistakes
     - Enforces code style
     - Run with: npm run lint


================================================================================
                    KEY DIRECTORIES IN FRONTEND/
================================================================================

public/
  Contains static assets served as-is
  
  Files:
    - vite.svg              Vite logo
    - Any other static files (images, fonts, etc.)

src/
  Source code directory - contains React components, styles, and logic
  
  Subdirectories:
    - pages/                Page components (Home, Login, Register, etc.)
    - styles/               CSS stylesheets for pages
    - assets/               Images and other assets
  
  Files:
    - App.jsx              Root component with routing
    - main.jsx             React entry point
    - index.css            Global styles
    - App.css              App-specific styles


================================================================================
                    APPLICATION STRUCTURE
================================================================================

COMPONENT HIERARCHY:

main.jsx
  └── App
      ├── Navigation (nav-bar)
      │   ├── Link to "/"              (Home)
      │   ├── Link to "/login"         (Login)
      │   ├── Link to "/register"      (Register)
      │   ├── Link to "/profile"       (Profile)
      │   ├── Link to "/map"           (Map)
      │   ├── Link to "/study-spaces"  (Study Spaces)
      │   ├── Link to "/feedback"      (Feedback)
      │   ├── Link to "/safety"        (Safety)
      │   └── Link to "/about"         (About)
      │
      └── Routes (React Router)
          ├── Route "/" element=<Home />
          ├── Route "/login" element=<Login />
          ├── Route "/register" element=<Register />
          ├── Route "/profile" element=<Profile />
          ├── Route "/map" element=<Map />
          ├── Route "/study-spaces" element=<StudySpaces />
          ├── Route "/feedback" element=<Feedback />
          ├── Route "/safety" element=<Safety />
          └── Route "/about" element=<About />


================================================================================
                    BUILD AND DEVELOPMENT WORKFLOW
================================================================================

DEVELOPMENT MODE:

1. Start development server:
   npm run dev
   
   Effect:
     - Starts Vite dev server (usually on http://localhost:5173)
     - Watches for file changes
     - Hot module replacement (changes appear instantly)
     - Source maps for debugging
   
   Terminal output shows:
     VITE v7.1.7  ready in 234 ms
     ➜  Local:   http://localhost:5173/

2. Open browser:
   Navigate to http://localhost:5173
   Application loads with hot refresh enabled

3. Make code changes:
   Changes to .jsx and .css files reload automatically
   State is preserved when possible


PRODUCTION BUILD:

1. Build for production:
   npm run build
   
   Effect:
     - Compiles React components
     - Bundles JavaScript and CSS
     - Minifies assets
     - Generates dist/ folder
     - Creates optimized output

2. Review build results:
   - dist/index.html       - Entry point
   - dist/assets/          - Bundled and minified files
   - Build is ready for deployment

3. Preview build locally:
   npm run preview
   
   Effect:
     - Serves the production build locally
     - Useful for testing before deployment


CODE QUALITY:

1. Run linter:
   npm run lint
   
   Effect:
     - Checks code for quality issues
     - Reports ESLint violations
     - Fix common issues automatically: npm run lint -- --fix


================================================================================
                    STYLING SYSTEM
================================================================================

CSS ARCHITECTURE:

1. index.css (Global Styles)
   ├── CSS Custom Properties (color palette)
   ├── Font configuration (Open Sans)
   ├── Global element styles (body, button, input, etc.)
   ├── Component styles (.app-container, .nav-bar, etc.)
   └── Media queries for responsiveness

2. App.css
   - Currently uses styles from index.css

3. Page-specific CSS (in styles/ folder)
   - Map.css
   - Feedback.css
   - Safety.css
   - StudySpaces.css
   - About.css

DESIGN SYSTEM:

Color Palette (CSS Custom Properties):
  --color-navy-blue:      #12214A   - Main background
  --color-medium-navy:    #1C2A6D   - Navigation
  --color-light-navy:     #6A7CB0   - Highlights
  --color-dark-grey:      #2D3748   - Primary text
  --color-medium-grey:    #4A5568   - Secondary text
  --color-white:          #FFFFFF   - Content bg
  --color-golden-yellow:  #FFD700   - Focus/outlines

Typography:
  Font Family: Open Sans (Google Fonts)
  h1: 3.2em, line-height: 1.1
  h2-h5: Proportional sizing
  body: 1em, line-height: 1.5

Responsive Design:
  Primary breakpoint: max-width: 860px
  Mobile-first approach
  Grid and flexbox layouts


================================================================================
                    KEY DEPENDENCIES EXPLANATION
================================================================================

REACT 19.1.1

Purpose: UI component library
Uses in Frontend:
  - JSX syntax for component rendering
  - Functional components with hooks
  - useState, useEffect, useMemo, useCallback
  - React.StrictMode for development warnings

Import Pattern:
  import React from "react";
  import { useState, useEffect } from "react";

Key Concepts:
  - Components as functions
  - Props for data passing
  - State with hooks
  - Effect hooks for side effects
  - Memoization for performance


REACT ROUTER DOM 7.9.4

Purpose: Client-side routing and navigation
Uses in Frontend:
  - BrowserRouter wrapper in main.jsx
  - Routes and Route components in App.jsx
  - Link components for navigation
  - Route path matching and rendering

Import Pattern:
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

Benefits:
  - Single Page Application (no full page reloads)
  - URL-driven navigation
  - Component-based routing
  - Navigation state management


AXIOS 1.13.2

Purpose: HTTP client for API communication
Uses in Frontend:
  - Login.jsx: axios.post("/api/auth/login", form)
  - Register.jsx: axios.post("/api/auth/register", payload)
  - Feedback.jsx: Form submission (simulated, not connected)

Import Pattern:
  import axios from "axios";

Key Methods:
  - axios.post(url, data) - POST request
  - axios.get(url) - GET request
  - axios.put(url, data) - PUT request
  - axios.delete(url) - DELETE request

Error Handling:
  try {
    const res = await axios.post(url, data);
  } catch (err) {
    const message = err?.response?.data?.message || "Error";
  }


REACT LEAFLET 5.0.0 & LEAFLET 1.9.4

Purpose: Interactive maps for campus navigation
Uses in Frontend:
  - Map.jsx: Display campus map with markers
  - Study space locations with popups
  - OpenStreetMap tiles

Import Pattern:
  import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
  import L from "leaflet";

Components:
  - MapContainer: Map container with center and zoom
  - TileLayer: Background map tiles from OpenStreetMap
  - Marker: Location pins on map
  - Popup: Information display on marker click

Features:
  - Interactive map navigation (pan, zoom)
  - Custom markers with icons
  - Popup information boxes
  - Responsive map sizing


================================================================================
                    DATA FLOW AND STATE MANAGEMENT
================================================================================

AUTHENTICATION FLOW:

1. User visits /register page
2. Register.jsx renders form
3. User fills form and submits
4. Handler calls axios.post("/api/auth/register", payload)
5. Backend validates and creates user
6. Frontend displays success/error message
7. User can navigate to /login

8. User visits /login page
9. Login.jsx renders form
10. User enters email and password
11. Handler calls axios.post("/api/auth/login", credentials)
12. Backend verifies and returns user data
13. Frontend displays success message
14. User can navigate to other pages

LOCAL STORAGE USAGE:

In Profile.jsx:
  - Persists student profile information
  - Persists class schedule
  - Functions:
    - readLS(key, fallback) - Read from localStorage
    - writeLS(key, value) - Write to localStorage
  - Data survives page reloads

Maps and Campus Data:

In Map.jsx and StudySpaces.jsx:
  - Data is hardcoded in component state
  - Not persisted to backend
  - Ready for backend integration
  - Currently uses static arrays of campus locations


================================================================================
                    API INTEGRATION
================================================================================

BACKEND API BASE URL:

Configured implicitly to:
  http://localhost:5000/api

Axios requests use relative paths:
  axios.post("/api/auth/register", ...)
  axios.post("/api/auth/login", ...)

CORS Configuration:
  Backend enables CORS
  Frontend runs on different port (5173)
  API calls from frontend to backend work seamlessly


ENDPOINTS USED:

POST /api/auth/register
  Used in: Register.jsx
  Request: { name, email, password }
  Response: { message, ... }

POST /api/auth/login
  Used in: Login.jsx
  Request: { email, password }
  Response: { message, user: { name, email } }

FUTURE ENDPOINTS (Ready to integrate):

GET /api/study-spaces
  Would return: Array of study space objects
  Replace hardcoded data in Map.jsx and StudySpaces.jsx

GET /api/profile/:userId
  Would return: User profile information
  Extend Profile.jsx to load from backend

POST /api/feedback
  Would save feedback to database
  Currently form validation only

POST /api/events
  Would return: Campus events
  Implement Events.jsx page


================================================================================
                    ENVIRONMENT CONFIGURATION
================================================================================

DEVELOPMENT ENVIRONMENT:

Default Configuration:
  - API Base URL: Relative paths (assumes backend on same host)
  - Frontend Port: 5173 (Vite default)
  - Backend Port: 5000 (Express default)

Vite Environment Variables:
  If needed, create .env file in frontend/:
  VITE_API_URL=http://localhost:5000/api
  
  Access in code:
  const apiUrl = import.meta.env.VITE_API_URL;

PRODUCTION ENVIRONMENT:

Should configure:
  - VITE_API_URL pointing to deployed backend
  - Build with: npm run build
  - Deploy dist/ folder to CDN or server


================================================================================
                    RESPONSIVE DESIGN
================================================================================

BREAKPOINTS:

Mobile First Approach:
  - Default: Mobile/tablet layout
  - 860px+: Desktop layout changes

Media Query Usage:

@media (max-width: 860px) {
  .profile-header { grid-template-columns: 1fr; }
  .scheduler-layout { grid-template-columns: 1fr; }
  .add-class-form .form-grid { grid-template-columns: 1fr 1fr; }
}

Grid Changes:
  - Profile: 2-column → 1-column
  - Scheduler: Sidebar + content → Stacked
  - Forms: 6-column → 2-column

Viewport Meta Tag:
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  Ensures proper scaling on mobile devices


================================================================================
                    ASSET MANAGEMENT
================================================================================

STATIC ASSETS:

Stored in: public/ directory

Served at root path:
  public/vite.svg → /vite.svg

Usage in components:
  <img src="/vite.svg" alt="logo" />

Images in src/:

Stored in: src/assets/
Referenced with imports:

  import logo from "../assets/img1.png";
  <img src={logo} alt="PESUNav Hub Logo" />

Benefits:
  - Bundled with code
  - Hash included in filename (cache busting)
  - Works with code splitting


================================================================================
                    PERFORMANCE OPTIMIZATION
================================================================================

IMPLEMENTED OPTIMIZATIONS:

1. Vite bundling
   - Fast cold startup
   - Instant HMR (hot module replacement)
   - Optimized production builds

2. Code splitting
   - Each page component lazy loaded
   - Reduces initial bundle size

3. CSS optimization
   - Minified in production
   - CSS-in-JS removed (pure CSS)
   - CSS custom properties reduce redundancy

4. Image optimization
   - Small SVG logo
   - PNG images compressed

POTENTIAL OPTIMIZATIONS:

1. Lazy loading
   - import() for route components
   - React.lazy() for suspense

2. Memoization
   - React.memo for expensive components
   - useMemo for calculations (already used in Profile.jsx)

3. Bundle analysis
   - rollup-plugin-visualizer
   - Identify large dependencies

4. Caching
   - Service workers for offline support
   - Browser cache headers on CDN


================================================================================
                    DEPLOYMENT OPTIONS
================================================================================

HOSTING OPTIONS:

1. Netlify
   - npm run build
   - Deploy dist/ folder
   - Auto-deploys on git push

2. Vercel
   - git push to deploy
   - Automatic builds
   - Preview deployments

3. GitHub Pages
   - Build and push dist/ to gh-pages branch
   - Free hosting for static sites

4. AWS S3 + CloudFront
   - Upload dist/ to S3
   - CloudFront CDN
   - Custom domains

5. Traditional Server
   - Copy dist/ to web server
   - nginx or Apache to serve

DEPLOYMENT STEPS:

1. Update API URL for production
   - Set VITE_API_URL to production backend
   - npm run build with production environment

2. Build production version:
   npm run build
   
3. Test production build:
   npm run preview

4. Deploy dist/ folder to host


================================================================================
                    DEBUGGING
================================================================================

DEVELOPMENT TOOLS:

1. React DevTools Browser Extension
   - Inspect component hierarchy
   - View and modify props/state
   - Track component renders

2. Browser DevTools (F12)
   - Console for error messages
   - Network tab for API calls
   - Application tab for localStorage
   - Performance profiling

3. Vite Debug
   - HMR shows update status
   - Console shows build warnings
   - Source maps for debugging

COMMON ISSUES:

CORS Errors:
  Error: "Access to XMLHttpRequest blocked by CORS policy"
  Solution: Check backend CORS configuration
  Ensure backend has app.use(cors())

API 404 Errors:
  Error: "POST http://localhost:5000/api/auth/login 404"
  Solution: Check backend is running
  Verify routes are mounted correctly

Blank Page:
  Issue: Index.html loads but React doesn't render
  Solution: Check browser console for errors
  Ensure <div id="root"></div> in index.html

Hot Reload Not Working:
  Solution: Restart dev server (npm run dev)
  Clear browser cache


================================================================================
                    FILE STRUCTURE VISUALIZATION
================================================================================

frontend/
├── index.html                 HTML entry point
├── vite.config.js            Vite configuration
├── eslint.config.js          Code quality rules
├── package.json              Dependencies and scripts
├── package-lock.json         Dependency lock file
│
├── public/
│   └── vite.svg              Static assets
│
└── src/
    ├── main.jsx              React entry point
    ├── App.jsx               Root component with routing
    ├── index.css             Global styles
    ├── App.css               Component-specific styles
    │
    ├── assets/               Images and media
    │   └── img1.png          PESUNav Hub logo
    │
    ├── pages/                Page components
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Profile.jsx
    │   ├── Map.jsx
    │   ├── StudySpaces.jsx
    │   ├── Feedback.jsx
    │   ├── Safety.jsx
    │   ├── About.jsx
    │   ├── Events.jsx        (empty placeholder)
    │   └── Services.jsx      (empty placeholder)
    │
    └── styles/               Page-specific CSS
        ├── Map.css
        ├── Feedback.css
        ├── Safety.css
        ├── StudySpaces.css
        └── About.css


================================================================================
                    END OF FRONTEND DOCUMENTATION
================================================================================
*/
