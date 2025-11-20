/*
================================================================================
                    PESUNav HUB - PROJECT DOCUMENTATION
                     Complete File and Function Reference
================================================================================

PROJECT OVERVIEW:
  PESUNav Hub is a Smart Campus Navigation & Student Companion Platform built
  with the MERN stack (MongoDB, Express, React, Node.js). It's designed to help
  PES University students efficiently navigate their campus, manage their class
  schedules, discover study spaces, and access essential campus safety information.

================================================================================
                          MAIN DIRECTORY STRUCTURE
================================================================================

ROOT DIRECTORY FILES:
  ├── package.json              Main project dependencies and scripts (axios, bcryptjs,
  │                             cors, dotenv, express, leaflet, mongoose, react,
  │                             react-dom, react-leaflet, react-router-dom)
  │                             Contains: scripts for running both frontend and backend
  │
  ├── package-lock.json         Locked versions of all dependencies
  │
  └── README.md                 Project overview with features, tech stack, and setup
                                instructions for the PESUNav Hub application


================================================================================
                        BACKEND DIRECTORY STRUCTURE
================================================================================

BACKEND FOLDER (backend/):
  This folder contains the Node.js/Express backend API server that handles:
  - User authentication (registration and login)
  - MongoDB database connections
  - RESTful API endpoints for the frontend
  - Password hashing and security

  KEY FILES IN backend/:

  1. package.json
     Purpose: Backend-specific dependencies and scripts
     Contains: bcryptjs (password hashing), cors (cross-origin requests),
     dotenv (environment variables), express (API framework), mongoose (MongoDB ODM)
     Scripts: "start" runs the Node.js server from server.js

  2. server.js
     Purpose: Main Express server entry point
     Responsibilities:
       - Initializes Express app with CORS middleware to allow frontend requests
       - Sets up JSON body parsing middleware
       - Connects to MongoDB using mongoose
       - Mounts authentication routes at /api/auth endpoint
       - Listens on PORT (default 5000) and logs server startup message
       - Includes error handling for MongoDB connection failures
     Key Features: Database connection with error logging, modular route system

  3. models/User.js
     Purpose: Mongoose schema definition for User documents in MongoDB
     Fields:
       - name (String, required, trimmed): Student's full name
       - email (String, required, unique, lowercase): Student's email address
       - password (String, required): Hashed password stored securely
     Metadata: Created with timestamps (createdAt, updatedAt) for tracking
     Exports: User model for use in routes and database queries

  4. routes/auth.js
     Purpose: Authentication API routes for user registration and login
     Routes:
       - POST /register
         * Validates required fields (name, email, password)
         * Checks if user already exists
         * Hashes password using bcryptjs with salt rounds of 10
         * Creates new User document in MongoDB
         * Returns success/error messages with appropriate HTTP status codes
       - POST /login
         * Finds user by email in database
         * Compares provided password with hashed password using bcryptjs
         * Returns success message with user data (name, email) on successful login
         * Returns error messages for invalid credentials
     Security: Uses bcryptjs for secure password hashing and comparison


================================================================================
                        FRONTEND DIRECTORY STRUCTURE
================================================================================

FRONTEND FOLDER (frontend/):
  This folder contains the React Vite frontend application that provides:
  - User interface for navigation and campus exploration
  - Authentication forms (login/register)
  - Student profile management
  - Interactive campus map
  - Study spaces directory
  - Class scheduler
  - Feedback form
  - Safety information
  - About page

  KEY FILES IN frontend/:

  1. package.json
     Purpose: Frontend dependencies and development scripts
     Contains: axios (HTTP requests), leaflet (mapping), react, react-dom,
     react-leaflet (React mapping), react-router-dom (navigation)
     Scripts:
       - "dev": Starts Vite development server with hot reload
       - "build": Production build with Vite
       - "lint": ESLint code quality checks
       - "preview": Preview production build locally

  2. vite.config.js
     Purpose: Vite configuration for React frontend
     Configures: React plugin, development server settings, build optimization

  3. index.html
     Purpose: HTML entry point for the React application
     Contains: Root div with id="root" where React mounts
     Scripts: References main.jsx as the React entry point

  4. src/main.jsx
     Purpose: React application entry point and root component setup
     Responsibilities:
       - Imports React and ReactDOM
       - Wraps App component with BrowserRouter from react-router-dom
       - Renders wrapped App component into the root DOM element
       - Enables routing functionality for the entire application
     Imports: Global styles from index.css

  5. src/App.jsx
     Purpose: Root component providing navigation and routing
     Responsibilities:
       - Sets up React Router with Routes and Route components
       - Provides navigation bar with 9 navigation links
       - Renders appropriate page component based on current URL route
     Navigation Links:
       - Home (/)
       - Login (/login)
       - Register (/register)
       - Profile (/profile)
       - Map (/map)
       - Study Spaces (/study-spaces)
       - Feedback (/feedback)
       - Safety (/safety)
       - About (/about)
     Structure: Contains app-container div with nav-bar, hr divider, and content-area

  6. src/index.css
     Purpose: Global styles and CSS custom properties for the entire application
     Color Variables:
       - Navy blue palette: --color-navy-blue, --color-medium-navy, --color-light-navy
       - Grey palette: --color-dark-grey, --color-medium-grey
       - Accent colors: --color-white, --color-golden-yellow
     Global Styles:
       - Font: Open Sans from Google Fonts
       - Body background: Navy blue color scheme
       - Button styles with hover effects and transitions
       - Input/textarea/select styling with golden outlines and focus states
       - Navigation bar styling
       - Media queries for light color scheme preference
     Component Classes:
       - .app-container: Main content wrapper with shadow and border radius
       - .nav-bar: Flexbox navigation with spacing and hover effects
       - .content-area: Main content section
       - .home-hero: Home page hero section styling
       - .auth-section & .auth-card: Login/Register form styling
       - .profile-page: Student profile page layout
       - .scheduler-section: Class scheduler styling
       - .filter-card & .filter-button: Filter UI for scheduler
       - .class-card: Individual class display in scheduler
       - Media queries: Responsive design for screens < 860px width

  7. src/App.css
     Purpose: App-specific component styles (currently using index.css)
     Note: Global styles consolidated in index.css

  PAGES FOLDER (frontend/src/pages/):

  1. Home.jsx
     Purpose: Landing page displaying PESUNav Hub introduction
     Content:
       - h1: "PESUNav Hub" heading
       - p: "Smart campus geolocation and navigation platform" subtitle
       - img: Logo image (img1.png) with alt text
     Styling: Uses .home-hero, .hero-logo classes from index.css

  2. Login.jsx
     Purpose: User login authentication form
     Features:
       - Email input field
       - Password input field
       - Form submission handler that sends POST request to /api/auth/login
       - Error/success message display
       - Link to Register page for new users
     State Management: form state (email, password) and status message
     API: Axios POST to /api/auth/login with credentials
     Styling: Uses .auth-section, .auth-card, .auth-form classes

  3. Register.jsx
     Purpose: User account creation form
     Features:
       - Full Name input
       - Email input
       - Student ID input (optional)
       - Department dropdown (CSE, ECE, CSE-AIML, BBA, PD, NS)
       - Password input
       - Confirm Password input
       - Password matching validation
       - Form submission handler for /api/auth/register
       - Link to Login page for existing users
     State Management: form state with 6 fields and status messages
     API: Axios POST to /api/auth/register with name, email, password
     Validation: Ensures passwords match before submission
     Styling: Uses auth component classes

  4. Profile.jsx
     Purpose: Student profile management and class scheduler
     Features:
       - Student profile section:
         * Avatar/image upload (file input with preview)
         * Editable profile information (name, email, student ID, department)
       - Class scheduler:
         * Add new class form with course title, instructor, day, time, room
         * Class list display with day filtering
         * Delete class functionality
         * Day-based color pill badge for visual distinction
     State Management:
       - profile: stores student info and image data URL
       - classes: array of class objects with unique IDs
       - filterDay: current filter selection (All or specific weekday)
       - showAdd: toggle for add class form visibility
       - form: form state for new class input
     localStorage: Persists profile and class schedule data
     Styling: Uses profile-page, scheduler-section, class-card classes

  5. Map.jsx
     Purpose: Interactive campus map with study space locations
     Features:
       - MapContainer from react-leaflet displaying OpenStreetMap tiles
       - Custom markers for different study space types (library, cafe, lab, etc.)
       - Clickable markers with popup information
       - Study spaces list with cards showing name, type, coordinates
       - Active card highlighting when space is selected
       - Space type badges (library, study_area, cafe, lab, discussion)
     Data: studySpaces array with 5 campus locations (Main Library, CS Building,
       North Wing Cafe, Engineering Lab, Auditorium Foyer)
     Map: Centered on campus at [12.9265, 77.5997], zoom level 18
     Styling: Uses map-page, map-container, spaces-list, space-card classes
     Imports: react-leaflet, leaflet, ../styles/Map.css

  6. StudySpaces.jsx
     Purpose: Browse and filter available study spaces on campus
     Features:
       - Study space showcase cards showing space info
       - Filter buttons by space type (All, Library, Study Areas, Cafe, Lab, Discussion)
       - Detail panel displaying full information for selected space
       - Features list for each space
       - Location, capacity, hours, and type information
       - "Navigate to this space" button (placeholder functionality)
     Data: studySpacesData array with 5 spaces and comprehensive details
     State Management: selectedType (filter), selectedSpace (detail panel)
     Type Labels: Emoji-prefixed type labels for visual clarity
     Styling: Uses study-spaces-page, spaces-showcase, space-card, details-panel classes

  7. Feedback.jsx
     Purpose: Feedback form and contact information display
     Features:
       - Feedback form:
         * Name, Email, Subject, Message fields
         * Form validation for required fields
         * Success message display after submission
         * Form reset on successful submission
       - Contact Information section:
         * Email, Phone, Office Location cards
         * Office hours listing
         * Social media links section
         * FAQ section with common questions and answers
     State Management: form (name, email, subject, message) and submitted flag
     Validation: Checks all fields are filled before submission
     Styling: Uses feedback-page, feedback-form, contact-info-container classes
     Imports: ../styles/Feedback.css

  8. Safety.jsx
     Purpose: Campus safety information and emergency procedures
     Features:
       - Emergency banner with 112 emergency number
       - Quick emergency contact cards (Police, Security, Medical, Fire)
       - Tab-based safety procedures (6 categories):
         * Personal Safety (awareness, group travel, valuables, instincts)
         * Building Safety (exits, locks, buddy system, alarms)
         * Event Safety (groups, contacts, hydration, security)
         * Digital Safety (passwords, info, phishing, updates)
         * Travel Safety (location sharing, cabs, items, drivers)
         * Health & Wellness (check-ups, medical facilities, mental health)
       - Important emergency numbers table
       - Campus safety resources list
       - 6 general safety tips with numbered cards
       - Footer with campus security contact info
     State Management: activeTab (selected procedure category)
     Data: emergencyContacts array, safetyProcedures with tips, importantNumbers
     Styling: Uses safety-page, contact-box, tabs, tips-cards classes
     Imports: ../styles/Safety.css

  9. About.jsx
     Purpose: Project information, features, and team details
     Sections:
       - Hero section with title and tagline
       - Mission statement explaining PESUNav Hub's purpose
       - Key Features grid (6 features with icons and descriptions)
       - How it Works section (4-step process)
       - Technology Stack section (Product, Design, Campus Integration)
       - Values section (4 core values)
       - FAQ section (6 common questions)
       - Contact CTA linking to Feedback page
       - Footer with copyright
     Data: features array (6), team array (3), values and FAQ inline
     Styling: Uses about-page, hero-section, features-grid, team-grid classes
     Imports: ../styles/About.css

  10. Events.jsx
      Purpose: Placeholder for events functionality
      Current State: Returns null (not implemented)

  11. Services.jsx
      Purpose: Placeholder for services functionality
      Current State: Returns null (not implemented)

  STYLES FOLDER (frontend/src/styles/):

  1. Map.css
     Purpose: Styles for the Map component page layout
     Contains: Responsive map container, study spaces list, and space card styling

  2. Feedback.css
     Purpose: Styles for the Feedback component
     Contains: Form styling, contact information cards, FAQ section styling

  3. Safety.css
     Purpose: Styles for the Safety component
     Contains: Emergency banner, contact boxes, tab styling, procedures display,
     safety tips cards, and contact information layout

  4. StudySpaces.css
     Purpose: Styles for the StudySpaces component
     Contains: Filter buttons, space cards, detail panel, features list,
     and responsive grid layouts

  5. About.css
     Purpose: Styles for the About component
     Contains: Hero section, features grid, how-it-works steps, team/tech stack cards,
     values grid, FAQ section, and footer styling


================================================================================
                    VITE-PROJECT DIRECTORY (Unused Template)
================================================================================

VITE-PROJECT FOLDER (vite-project/):
  This is a standard Vite project template that's not actively used in the main
  application. It was likely created as a template or reference.

  KEY FILES:
  1. package.json         - Template dependencies and scripts
  2. tsconfig.json        - TypeScript configuration
  3. index.html           - HTML entry point template
  4. src/main.ts          - TypeScript entry point
  5. src/counter.ts       - Sample component logic
  6. src/style.css        - Template styles
  7. vite.config.ts       - Vite configuration for template


================================================================================
                          PROJECT TECHNOLOGY STACK
================================================================================

FRONTEND TECHNOLOGIES:
  - React 19.x              Modern UI library with hooks
  - Vite                    Lightning-fast build tool and dev server
  - React Router 7.x        Client-side routing and navigation
  - Axios 1.13.x            HTTP client for API requests
  - Leaflet 1.9.x           Mapping library for interactive maps
  - React Leaflet 5.x       React bindings for Leaflet
  - Open Sans Font          Google Fonts typography
  - CSS (Custom Properties)  Global design system with CSS variables

BACKEND TECHNOLOGIES:
  - Node.js                 JavaScript runtime
  - Express 5.x             Web framework for APIs
  - MongoDB                 NoSQL document database
  - Mongoose 8.x            MongoDB object modeling
  - bcryptjs 3.x            Password hashing and security
  - CORS 2.8.x              Cross-origin request handling
  - dotenv 17.x             Environment variable management


================================================================================
                            DATA FLOW ARCHITECTURE
================================================================================

USER REGISTRATION FLOW:
  1. User fills Register.jsx form with name, email, password
  2. Frontend validates password matching
  3. Axios sends POST to /api/auth/register
  4. Backend (routes/auth.js) validates required fields
  5. Backend checks for existing email in User model
  6. Backend hashes password with bcryptjs
  7. Backend creates User document in MongoDB
  8. Frontend displays success/error message

USER LOGIN FLOW:
  1. User fills Login.jsx form with email, password
  2. Axios sends POST to /api/auth/login
  3. Backend finds user by email in database
  4. Backend compares password using bcryptjs
  5. Backend returns user data (name, email)
  6. Frontend stores response and displays success/error

PROFILE MANAGEMENT FLOW:
  1. Profile.jsx loads student data from localStorage
  2. User edits profile fields or uploads avatar image
  3. Avatar is read as Data URL and stored in state
  4. All changes automatically saved to localStorage
  5. User can add/remove classes from schedule
  6. Class data persists in localStorage with unique IDs

CAMPUS MAP FLOW:
  1. Map.jsx loads study spaces data (hardcoded array)
  2. MapContainer renders OpenStreetMap tiles
  3. Markers displayed for each study space
  4. User clicks marker or card to select space
  5. Marker popup shows space details
  6. Selected space card highlights in list

STUDY SPACES FLOW:
  1. StudySpaces.jsx loads spaces data
  2. Filter buttons control display
  3. User clicks space card to open detail panel
  4. Panel displays comprehensive space information
  5. Navigation button provides user feedback


================================================================================
                         DATA PERSISTENCE LAYERS
================================================================================

BACKEND PERSISTENCE:
  - User documents stored in MongoDB with Mongoose ODM
  - Fields: name, email (unique), password (hashed), createdAt, updatedAt
  - Passwords secured with bcryptjs before storage
  - Email uniqueness enforced at database level

FRONTEND PERSISTENCE:
  - Student profile data stored in browser localStorage
  - Class schedule stored in localStorage with persistent state
  - Maps and campus data currently hardcoded (ready for backend integration)
  - Form submissions are simulated (feedback, etc.)


================================================================================
                          STYLING & DESIGN SYSTEM
================================================================================

COLOR PALETTE (CSS Custom Properties):
  - --color-navy-blue: #12214A       Main background, dark base
  - --color-medium-navy: #1C2A6D     Navigation accent
  - --color-light-navy: #6A7CB0      Muted highlights
  - --color-dark-grey: #2D3748       Primary text, borders
  - --color-medium-grey: #4A5568     Secondary text, accents
  - --color-white: #FFFFFF           Content background
  - --color-golden-yellow: #FFD700   Focus/outline color

TYPOGRAPHY:
  - Font Family: Open Sans (Google Fonts)
  - Sizes: h1 3.2em, headers 2-2.5em, body 1em
  - Font Weight: Regular 400, Semi-bold 600, Bold 700
  - Line Height: 1.5 for body text

RESPONSIVE BREAKPOINTS:
  - Primary breakpoint: 860px (max-width for stacked layouts)
  - Affects: Profile grid, scheduler layout, form grid
  - Mobile-first approach with progressive enhancement


================================================================================
                          KEY CONFIGURATION FILES
================================================================================

ESLINT CONFIG (frontend/eslint.config.js):
  Purpose: Code quality and style enforcement
  Includes: React, React Hooks, and Refresh plugin rules

VITE CONFIG (frontend/vite.config.js):
  Purpose: Vite build and development server configuration
  Includes: React plugin setup for fast refresh


================================================================================
                            SECURITY CONSIDERATIONS
================================================================================

PASSWORD SECURITY:
  - Bcryptjs hashes all passwords with 10 salt rounds
  - Passwords never stored in plaintext
  - Passwords compared using bcryptjs.compare()

CORS SECURITY:
  - Express CORS middleware allows frontend to make requests
  - Can be restricted to specific origins in production

INPUT VALIDATION:
  - Registration validates required fields (name, email, password)
  - Email uniqueness enforced in database
  - Login validates email and password match
  - Frontend validation on Feedback form

ENVIRONMENT VARIABLES:
  - Backend uses dotenv to load MONGO_URI and PORT
  - Frontend configuration through vite.config.js
  - Secrets should never be committed to repository


================================================================================
                          FUTURE ENHANCEMENT OPPORTUNITIES
================================================================================

BACKEND ENHANCEMENTS:
  - Add JWT token authentication for session management
  - Implement user profile endpoints
  - Create study space management API
  - Add feedback storage and admin dashboard
  - Implement real-time notifications
  - Add scheduled event/class reminder system

FRONTEND ENHANCEMENTS:
  - Connect study space data to backend API
  - Implement real study space availability updates
  - Add calendar integration for class schedule
  - Develop mobile app with offline capabilities
  - Add event creation and management features
  - Implement search and advanced filtering
  - Add dark mode toggle

FEATURE COMPLETIONS:
  - Implement Events page functionality
  - Implement Services page functionality
  - Add payment processing for premium features
  - Implement user ratings and reviews
  - Add social features (friend connections, shared study spaces)
  - Develop admin dashboard for managing campus data


================================================================================
                          DEPLOYMENT CONSIDERATIONS
================================================================================

FRONTEND:
  - Build: npm run build creates optimized dist/ folder
  - Hosting: Can be deployed to Netlify, Vercel, Firebase, AWS S3
  - CDN: Static assets should be served from CDN
  - Environment: Set API_URL pointing to backend in production

BACKEND:
  - Database: Requires MongoDB connection (Atlas or local)
  - Environment: Must set MONGO_URI and PORT variables
  - Hosting: Can be deployed to Heroku, Railway, AWS, Google Cloud
  - API: CORS should be restricted to frontend domain in production
  - Security: Use environment variables for sensitive credentials


================================================================================
                    END OF PROJECT DOCUMENTATION
================================================================================
*/
