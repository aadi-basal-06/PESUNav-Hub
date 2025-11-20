/*
================================================================================
                    BACKEND DIRECTORY DOCUMENTATION
           Node.js/Express API Server for PESUNav Hub Application
================================================================================

DIRECTORY PURPOSE:
  The backend folder contains the Node.js/Express server that provides RESTful
  API endpoints for the PESUNav Hub frontend. It handles user authentication,
  database operations, and serves as the backend service for the React frontend.

================================================================================
                          MAIN FILES IN BACKEND/
================================================================================

1. server.js
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Express server entry point and configuration
   
   RESPONSIBILITIES:
     - Initializes Express application
     - Sets up middleware (CORS, JSON parsing)
     - Establishes MongoDB connection via Mongoose
     - Mounts authentication routes
     - Starts server and listens on specified port
   
   KEY FUNCTIONALITY:
     require('express'):           Framework for HTTP server
     require('cors'):              Middleware to handle CORS requests
     require('mongoose'):          MongoDB object modeling
     require('dotenv'):            Load environment variables from .env
     require('./routes/auth'):     Import authentication routes
   
   MIDDLEWARE SETUP:
     dotenv.config():              Load environment variables
     app.use(cors()):              Enable CORS for all routes
     app.use(express.json()):      Parse incoming JSON body content
   
   ROUTE MOUNTING:
     app.use('/api/auth', authRoutes):  Mount auth routes at /api/auth
   
   DATABASE CONNECTION:
     mongoose.connect():           Connect to MongoDB database
     Connection Parameters:
       - MONGO_URI: MongoDB connection string (from .env)
       - useNewUrlParser: true
       - useUnifiedTopology: true
   
   ERROR HANDLING:
     .catch(err => {...}):         Log connection errors and exit process
   
   SERVER STARTUP:
     app.listen(PORT):             Start listening on PORT (default 5000)
     PORT from process.env.PORT    or fallback to 5000
   
   LOGS:
     Console output indicates:
       - "Server running on http://localhost:5000" on success
       - MongoDB connection error messages on failure


2. package.json
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Project metadata and dependency management
   
   PROJECT METADATA:
     name: "backend"
     version: "1.0.0"
     main: "server.js"            Entry point when package is imported
     type: "commonjs"             Use CommonJS module system
   
   SCRIPTS:
     start: "node server.js"      Run server directly
     test: Error message (not configured)
   
   DEPENDENCIES:
     bcryptjs 3.0.2:              Password hashing library
                                  - Converts plaintext passwords to secure hashes
                                  - Used in auth routes for password security
     
     cors 2.8.5:                  Cross-Origin Resource Sharing middleware
                                  - Allows frontend on different origin to make requests
                                  - Prevents browser blocking of API calls
     
     dotenv 17.2.3:               Environment variable loader
                                  - Reads .env file and loads into process.env
                                  - Used for MONGO_URI and PORT configuration
     
     express 5.1.0:               Web application framework
                                  - Creates HTTP server
                                  - Manages routes and middleware
                                  - Core framework for API
     
     mongoose 8.19.2:             MongoDB object mapper (ODM)
                                  - Provides schema validation
                                  - Handles database connections
                                  - Enables model-based database operations
   
   DEV DEPENDENCIES:
     @types/bcryptjs 2.4.6:       TypeScript types for bcryptjs
     @types/express 5.0.4:        TypeScript types for express
     @types/node 24.9.1:          TypeScript types for Node.js
     ts-node-dev 2.0.0:           TypeScript runner with auto-reload
     typescript 5.9.3:            TypeScript compiler


3. models/User.js
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: MongoDB User model definition using Mongoose
   
   IMPORTS:
     require('mongoose'):          Mongoose ODM library
   
   SCHEMA DEFINITION:
     userSchema = new mongoose.Schema({...})
   
   FIELDS:
     name {
       type: String
       required: true              Field must be provided
       trim: true                  Remove leading/trailing whitespace
       Description: Student's full name
     }
     
     email {
       type: String
       required: true              Field must be provided
       unique: true                No duplicate emails in database
       lowercase: true             Convert to lowercase for consistency
       Description: Student's email address (used for login)
     }
     
     password {
       type: String
       required: true              Field must be provided
       Description: Hashed password (bcryptjs hash, not plaintext)
     }
   
   TIMESTAMPS:
     { timestamps: true }          Automatically adds:
       - createdAt: ISO timestamp when document created
       - updatedAt: ISO timestamp when document last modified
   
   EXPORTS:
     mongoose.model('User', userSchema):  Export User model
       Name: 'User'                       Collection name: 'users'
       Usage: Imported and used in routes/auth.js
   
   DATABASE OPERATIONS ENABLED:
     - User.create()               Create new user document
     - User.findOne()              Find single user (used by email)
     - User.save()                 Save user instance after creation
     - User.find()                 Find multiple users


4. routes/auth.js
   ──────────────────────────────────────────────────────────────────────────
   PURPOSE: Authentication API endpoints for registration and login
   
   IMPORTS:
     require('express'):           Framework and Router
     require('bcryptjs'):          Password hashing
     require('../models/User'):    User model for database operations
   
   EXPORTS:
     router:                       Express Router with two POST routes
   
   ENDPOINT 1: POST /api/auth/register
   ────────────────────────────────────
   PURPOSE: Create new user account
   
   REQUEST BODY (JSON):
     {
       name: string              Required - Student's full name
       email: string             Required - Unique email address
       password: string          Required - Password (will be hashed)
     }
   
   VALIDATION STEPS:
     1. Check all fields provided (name, email, password)
        - Return 400 if missing: { message: "Missing fields" }
     
     2. Check email uniqueness
        - Query: User.findOne({ email })
        - If exists: Return 400 { message: "User already exists" }
     
     3. Hash password
        - Function: bcrypt.hash(password, 10)
        - Salt rounds: 10 (security level)
        - Output: Secure hash string
     
     4. Create User document
        - new User({ name, email, password: hash })
        - user.save() - Persist to MongoDB
     
     5. Return success response
        - Status: 201 (Created)
        - Body: { message: "Registration successful" }
   
   ERROR HANDLING:
     - Try/catch block catches any exceptions
     - Return 500: { message: "Server error" } on unexpected errors
   
   SECURITY:
     - Password never stored in plaintext
     - 10 salt rounds provides strong hashing
     - Email uniqueness prevents duplicate accounts
   
   
   ENDPOINT 2: POST /api/auth/login
   ────────────────────────────────────
   PURPOSE: Authenticate user and verify credentials
   
   REQUEST BODY (JSON):
     {
       email: string              Required - User's email address
       password: string           Required - User's password (plaintext input)
     }
   
   AUTHENTICATION STEPS:
     1. Find user by email
        - Query: User.findOne({ email })
        - If not found: Return 400 { message: "Invalid email or password" }
     
     2. Verify password
        - Function: bcrypt.compare(password, user.password)
        - Compares plaintext input with stored hash
        - Returns boolean result
        - If false: Return 400 { message: "Invalid email or password" }
     
     3. Return success with user data
        - Status: 200 (OK)
        - Body: {
            message: "Login successful"
            user: {
              name: user.name,
              email: user.email
            }
          }
   
   SECURITY NOTES:
     - Password hash never sent to frontend
     - Same error message for both wrong email and password (security)
     - Prevents username enumeration attacks
   
   ERROR HANDLING:
     - Try/catch block for unexpected errors
     - Return 500: { message: "Server error" }


================================================================================
                          SUBDIRECTORY: models/
================================================================================

PURPOSE:
  Contains Mongoose schema definitions for MongoDB collections

FILES:
  - User.js (documented above)

PATTERN:
  Each file exports a mongoose.model that:
  - Defines document structure and validation
  - Provides database operation methods
  - Is imported in routes for CRUD operations


================================================================================
                          SUBDIRECTORY: routes/
================================================================================

PURPOSE:
  Contains Express Router definitions for API endpoints

FILES:
  - auth.js (documented above)

PATTERN:
  Each file:
  - Creates express.Router()
  - Defines HTTP route handlers (GET, POST, PUT, DELETE, etc.)
  - Validates request data
  - Performs database operations
  - Returns JSON responses
  - Includes error handling
  - Exports router for mounting in server.js


================================================================================
                    ENVIRONMENT VARIABLES (.env)
================================================================================

REQUIRED FOR OPERATION:

PORT (Optional)
  Default Value: 5000
  Purpose: Port number for Express server to listen on
  Example: PORT=3000

MONGO_URI (Required)
  Format: mongodb+srv://username:password@cluster.mongodb.net/database
  Purpose: MongoDB connection string
  Options:
    - MongoDB Atlas: Cloud-hosted database
    - Local MongoDB: mongodb://localhost:27017/pesunavhub
  Example: MONGO_URI=mongodb+srv://user:pass@cluster0.mongodb.net/pesunavhub

TYPICAL .env FILE:
  PORT=5000
  MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pesunavhub


================================================================================
                    API ENDPOINT REFERENCE
================================================================================

BASE URL: http://localhost:5000/api

AUTHENTICATION ENDPOINTS:

1. POST /auth/register
   Request:  { name, email, password }
   Response: { message, ... }
   Status:   201 (success) or 400/500 (error)

2. POST /auth/login
   Request:  { email, password }
   Response: { message, user: { name, email } }
   Status:   200 (success) or 400/500 (error)

CORS ENABLED:
  All endpoints accessible from frontend on different origin


================================================================================
                    DEVELOPMENT WORKFLOW
================================================================================

STARTING THE BACKEND:
  1. Install dependencies: npm install
  2. Create .env file with PORT and MONGO_URI
  3. Run: npm start (executes node server.js)
  4. Server starts on specified PORT
  5. Check logs for "Server running on..." message

TESTING ENDPOINTS:
  Tools: Postman, REST Client extension, curl
  
  Register endpoint test:
    POST http://localhost:5000/api/auth/register
    Body: { "name": "John", "email": "john@test.com", "password": "123456" }
  
  Login endpoint test:
    POST http://localhost:5000/api/auth/login
    Body: { "email": "john@test.com", "password": "123456" }

DEVELOPMENT NOTES:
  - Code uses CommonJS (require/module.exports)
  - No TypeScript in this version (JavaScript only)
  - Mongoose connects synchronously on startup
  - If MongoDB unavailable, process exits with error
  - CORS allows all origins by default


================================================================================
                    SECURITY BEST PRACTICES
================================================================================

IMPLEMENTED:
  ✓ Password hashing with bcryptjs (10 rounds)
  ✓ Email uniqueness constraint in schema
  ✓ Generic error messages (don't reveal if email exists)
  ✓ Required field validation
  ✓ CORS protection for cross-origin requests

RECOMMENDATIONS FOR PRODUCTION:
  - Use JWT tokens for authenticated requests
  - Add rate limiting to prevent brute force attacks
  - Implement email verification
  - Add password reset functionality
  - Use HTTPS for all communications
  - Restrict CORS to specific frontend domain
  - Add request validation middleware
  - Implement request logging
  - Use environment variables for all config
  - Set up database backups


================================================================================
                    INTEGRATION WITH FRONTEND
================================================================================

AXIOS REQUESTS:
  Frontend uses axios to call backend endpoints:
  
  Registration:
    axios.post("/api/auth/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password
    })
  
  Login:
    axios.post("/api/auth/login", {
      email: formData.email,
      password: formData.password
    })

RESPONSE HANDLING:
  Success: res.data.message displayed to user
  Error: err.response.data.message displayed as error

FRONTEND PAGES THAT USE BACKEND:
  - Register.jsx     → POST /api/auth/register
  - Login.jsx        → POST /api/auth/login
  - Profile.jsx      → Uses localStorage (not backend yet)
  - Map.jsx          → Uses hardcoded data (ready for backend integration)
  - StudySpaces.jsx  → Uses hardcoded data (ready for backend integration)


================================================================================
                    FUTURE ENHANCEMENTS
================================================================================

FEATURES TO ADD:
  - Password reset with email verification
  - User profile retrieval and update endpoints
  - Role-based access control (student, admin)
  - Study space management API
  - Feedback storage and admin retrieval
  - Class schedule backend storage
  - Real-time notifications
  - API documentation (Swagger/OpenAPI)
  - Unit tests for routes and models
  - Request validation middleware
  - Error handling middleware
  - Logging system
  - Rate limiting

TECHNOLOGY UPGRADES:
  - Convert to TypeScript for type safety
  - Add Passport.js for authentication strategy
  - Implement JWT for stateless authentication
  - Add GraphQL as alternative to REST
  - Containerize with Docker
  - Add Redis for caching


================================================================================
                    END OF BACKEND DOCUMENTATION
================================================================================
*/
