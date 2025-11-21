/*
================================================================================
                    BACKEND ROUTES FOLDER DOCUMENTATION
                    Express Route Handlers and API Endpoints
================================================================================

DIRECTORY PURPOSE:
  The routes folder contains Express Router definitions that handle HTTP
  requests from the frontend. Each file defines endpoints, validation,
  database operations, and response formatting.

DESIGN PATTERN:
  Express Router Pattern:
  1. Create router with express.Router()
  2. Define route handlers (router.post(), router.get(), etc.)
  3. Validate request data
  4. Perform business logic and database operations
  5. Return JSON responses with appropriate HTTP status codes
  6. Handle errors with try/catch
  7. Export router for mounting in server.js


================================================================================
                          FILE: auth.js
================================================================================

FULL PATH: backend/routes/auth.js

PURPOSE:
  Provides user authentication endpoints for registration and login.
  Handles account creation, password hashing, and credential verification.

IMPORTS:

  const express = require('express');
    Purpose: Framework for creating routes
    Used for: router.post(), route handlers
  
  const bcrypt = require('bcryptjs');
    Purpose: Password hashing library
    Used for: Hashing and comparing passwords
  
  const User = require('../models/User');
    Purpose: User model for database operations
    Used for: Creating, finding, saving user documents


EXPORT:

  module.exports = router;
  
  Exports: Express Router with 2 POST endpoints
  Mounted in: server.js at app.use('/api/auth', authRoutes)


================================================================================
                    ENDPOINT 1: POST /api/auth/register
================================================================================

ROUTE DEFINITION:
  router.post('/register', async (req, res) => { ... })

HTTP METHOD: POST
FULL URL: POST http://localhost:5000/api/auth/register
REQUEST CONTENT-TYPE: application/json

PURPOSE:
  Create a new user account. Handles registration validation, password
  hashing, and database insertion.

REQUEST BODY REQUIREMENTS:

  {
    "name": string,        Required - Student's full name
    "email": string,       Required - Unique email address
    "password": string     Required - Password (will be hashed)
  }

  Example Request:
  {
    "name": "John Smith",
    "email": "john@example.com",
    "password": "securePassword123"
  }

HANDLER FUNCTION LOGIC:

1. EXTRACT REQUEST DATA:
   const { name, email, password } = req.body;
   
   Behavior: Destructures the three fields from JSON body

2. VALIDATE REQUIRED FIELDS:
   if (!name || !email || !password)
     return res.status(400).json({ message: "Missing fields" });
   
   Behavior:
     - Checks if any field is missing or falsy
     - Returns HTTP 400 (Bad Request) if validation fails
     - Message helps client understand the error
   
   Response on Failure:
   {
     "message": "Missing fields"
   }

3. CHECK EMAIL UNIQUENESS:
   const existing = await User.findOne({ email });
   if (existing)
     return res.status(400).json({ message: "User already exists" });
   
   Behavior:
     - Queries database for user with same email
     - Returns HTTP 400 if user already exists
     - Prevents duplicate account creation
   
   Response on Failure:
   {
     "message": "User already exists"
   }

4. HASH PASSWORD:
   const hash = await bcrypt.hash(password, 10);
   
   Behavior:
     - Converts plaintext password to secure hash
     - 10 = salt rounds (higher = more secure but slower)
     - Salt rounds of 10 takes ~100ms per hash
     - Result: Irreversible one-way hash
   
   Example:
     Input:  "securePassword123"
     Output: "$2a$10$kHn1h8d4H3eBqKw.7c1F..dGNHkv0D.KvM6X2Cx8D8K4XG9x8XKUm"

5. CREATE USER DOCUMENT:
   const user = new User({ name, email, password: hash });
   
   Behavior:
     - Creates new User instance in memory
     - Note: password is the hash, not plaintext
     - Not yet in database

6. SAVE TO DATABASE:
   await user.save();
   
   Behavior:
     - Persists user document to MongoDB
     - Triggers schema validation
     - Applies auto-formatting (trim, lowercase)
     - Returns user document with _id and timestamps

7. RETURN SUCCESS RESPONSE:
   return res.status(201).json({ message: "Registration successful" });
   
   Status Code: 201 (Created)
   Response Body:
   {
     "message": "Registration successful"
   }
   
   HTTP 201 is standard for resource creation endpoints

ERROR HANDLING:

  try {
    // ... endpoint logic
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
  
  Behavior:
    - Wraps entire logic in try/catch
    - Catches unexpected errors (database errors, hashing errors, etc.)
    - Returns HTTP 500 (Internal Server Error)
    - Generic error message (doesn't expose implementation details)

COMPLETE REQUEST/RESPONSE EXAMPLES:

  SUCCESS CASE:
  ──────────────
  Request:
    POST /api/auth/register
    Content-Type: application/json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "password": "MySecure123!"
    }
  
  Response (201):
    {
      "message": "Registration successful"
    }

  MISSING FIELDS:
  ──────────────
  Request:
    POST /api/auth/register
    {
      "name": "John",
      "password": "Pass123"
    }
  
  Response (400):
    {
      "message": "Missing fields"
    }

  DUPLICATE EMAIL:
  ──────────────
  Request:
    POST /api/auth/register
    {
      "name": "John",
      "email": "existing@example.com",
      "password": "Pass123"
    }
  
  Response (400):
    {
      "message": "User already exists"
    }


================================================================================
                    ENDPOINT 2: POST /api/auth/login
================================================================================

ROUTE DEFINITION:
  router.post('/login', async (req, res) => { ... })

HTTP METHOD: POST
FULL URL: POST http://localhost:5000/api/auth/login
REQUEST CONTENT-TYPE: application/json

PURPOSE:
  Authenticate user with email and password. Returns user data on success
  for use in frontend session management.

REQUEST BODY REQUIREMENTS:

  {
    "email": string,       Required - User's email address
    "password": string     Required - User's password (plaintext)
  }

  Example Request:
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }

HANDLER FUNCTION LOGIC:

1. EXTRACT REQUEST DATA:
   const { email, password } = req.body;

2. FIND USER BY EMAIL:
   const user = await User.findOne({ email });
   if (!user)
     return res.status(400).json({ 
       message: "Invalid email or password" 
     });
   
   Behavior:
     - Queries database for user with matching email
     - Uses email index for fast lookup
     - Returns null if user not found
     - Returns HTTP 400 with generic message
   
   Security Note:
     - Same error message for "user not found" and "password wrong"
     - Prevents attackers from enumerating valid emails
     - Known as "timing attack prevention"

3. VERIFY PASSWORD:
   const ok = await bcrypt.compare(password, user.password);
   if (!ok)
     return res.status(400).json({ 
       message: "Invalid email or password" 
     });
   
   Behavior:
     - Compares plaintext input with stored hash
     - bcrypt.compare() takes hashed password as second argument
     - Executes time-constant comparison (prevents timing attacks)
     - Returns boolean: true if passwords match, false otherwise
   
   Example:
     plaintext: "securePassword123"
     hash: "$2a$10$kHn1h8d4H3eBqKw.7c1F..dGNHkv0D.KvM6X2Cx8D8K4XG9x8XKUm"
     result: true

4. RETURN SUCCESS RESPONSE:
   return res.json({
     message: "Login successful",
     user: { name: user.name, email: user.email }
   });
   
   Status Code: 200 (OK, default)
   Response Body:
   {
     "message": "Login successful",
     "user": {
       "name": "John Smith",
       "email": "john@example.com"
     }
   }
   
   Important:
     - Password hash is NOT included in response
     - Only name and email sent to frontend
     - Frontend can use this data for display

ERROR HANDLING:

  Same as register endpoint:
  try {
    // ... endpoint logic
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }

COMPLETE REQUEST/RESPONSE EXAMPLES:

  SUCCESS CASE:
  ──────────────
  Request:
    POST /api/auth/login
    Content-Type: application/json
    {
      "email": "john@example.com",
      "password": "securePassword123"
    }
  
  Response (200):
    {
      "message": "Login successful",
      "user": {
        "name": "John Smith",
        "email": "john@example.com"
      }
    }

  INVALID CREDENTIALS:
  ──────────────────
  Request:
    POST /api/auth/login
    {
      "email": "john@example.com",
      "password": "wrongPassword"
    }
  
  Response (400):
    {
      "message": "Invalid email or password"
    }

  USER NOT FOUND:
  ──────────────
  Request:
    POST /api/auth/login
    {
      "email": "nonexistent@example.com",
      "password": "somePassword"
    }
  
  Response (400):
    {
      "message": "Invalid email or password"
    }


================================================================================
                    ROUTING ARCHITECTURE
================================================================================

HOW ROUTES ARE MOUNTED IN SERVER:

File: backend/server.js

  const authRoutes = require('./routes/auth');
  app.use('/api/auth', authRoutes);
  
  Effect:
    - Imports the router exported by auth.js
    - Mounts all routes under /api/auth prefix
    - router.post('/register') becomes POST /api/auth/register
    - router.post('/login') becomes POST /api/auth/login

FULL ROUTE PATHS:

  Resource: User Authentication
  
  Register: POST http://localhost:5000/api/auth/register
  Login:    POST http://localhost:5000/api/auth/login


================================================================================
                    HTTP STATUS CODES USED
================================================================================

STATUS CODE REFERENCE:

200 OK
  Meaning: Request succeeded
  Used in: Login endpoint on successful authentication
  Body: { message, user }

201 Created
  Meaning: Resource was successfully created
  Used in: Register endpoint on successful account creation
  Body: { message }

400 Bad Request
  Meaning: Client error (invalid input or validation failure)
  Used in: Register (missing fields, duplicate email)
  Used in: Login (invalid credentials)
  Body: { message }

500 Internal Server Error
  Meaning: Server error (unexpected exception)
  Used in: Both endpoints when try/catch catches error
  Body: { message }


================================================================================
                    FRONTEND INTEGRATION
================================================================================

HOW FRONTEND CALLS THESE ENDPOINTS:

File: frontend/src/pages/Register.jsx

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = { 
      name: form.name, 
      email: form.email, 
      password: form.password 
    };
    const res = await axios.post("/api/auth/register", payload);
    setStatus(res.data.message);
  };
  
  Behavior:
    - Sends POST request to /api/auth/register
    - Sends form data in request body
    - Displays response message to user


File: frontend/src/pages/Login.jsx

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", form);
    setStatus(res.data.message || "Success");
  };
  
  Behavior:
    - Sends POST request to /api/auth/login
    - Sends email and password in body
    - Displays success/error message


================================================================================
                    SECURITY ANALYSIS
================================================================================

IMPLEMENTED SECURITY MEASURES:

1. PASSWORD HASHING
   ✓ Bcryptjs hashing with 10 salt rounds
   ✓ One-way hashing (cannot be reversed)
   ✓ Each hash is unique (salted)
   ✓ Takes ~100ms to hash (prevents brute force)

2. GENERIC ERROR MESSAGES
   ✓ "Invalid email or password" for both user not found and password wrong
   ✓ Prevents email enumeration attacks
   ✓ Attackers cannot identify valid email addresses

3. EMAIL UNIQUENESS
   ✓ Database constraint prevents duplicate emails
   ✓ Unique index on email field
   ✓ Prevents multiple accounts per email

4. REQUIRED FIELD VALIDATION
   ✓ Name, email, password all required
   ✓ Prevents incomplete account creation

5. TYPE SAFETY
   ✓ Mongodb stores password as string
   ✓ Mongoose enforces field types


SECURITY VULNERABILITIES & RECOMMENDATIONS:

Missing Features (Production Should Add):

1. RATE LIMITING
   Current: No limit on registration/login attempts
   Risk: Brute force attacks, account enumeration
   Solution: Implement rate limiting middleware

2. EMAIL VERIFICATION
   Current: No verification that email is real
   Risk: Users can register with invalid emails
   Solution: Send confirmation email before activation

3. SESSION MANAGEMENT
   Current: No session tokens or JWT
   Risk: No way to keep user logged in
   Solution: Implement JWT tokens or sessions

4. PASSWORD REQUIREMENTS
   Current: Any password accepted (even single character)
   Risk: Weak passwords accepted
   Solution: Enforce minimum length, complexity rules

5. HTTPS
   Current: No HTTPS requirement
   Risk: Passwords transmitted in plain HTTP
   Solution: Deploy with HTTPS only in production

6. REQUEST VALIDATION
   Current: Only checks required fields
   Risk: Invalid email format accepted
   Solution: Use email validation library

7. AUDIT LOGGING
   Current: No logging of registration/login attempts
   Risk: Cannot detect suspicious activity
   Solution: Log all authentication attempts


================================================================================
                    EXTENSION POSSIBILITIES
================================================================================

FUTURE ENDPOINTS TO ADD:

1. POST /api/auth/logout
   Purpose: Clear user session
   Would require: Session/JWT implementation

2. POST /api/auth/password-reset
   Purpose: Handle forgotten passwords
   Would require: Email service, reset token logic

3. POST /api/auth/refresh-token
   Purpose: Extend session
   Would require: JWT implementation

4. GET /api/auth/profile
   Purpose: Get current user profile
   Requires: Authentication middleware

5. PUT /api/auth/profile
   Purpose: Update user profile
   Requires: Authentication middleware

6. DELETE /api/auth/account
   Purpose: Delete user account
   Requires: Authentication middleware

7. POST /api/auth/email-verification
   Purpose: Verify user email address
   Requires: Email service integration


================================================================================
                    BEST PRACTICES FOR AUTHENTICATION
================================================================================

CURRENT IMPLEMENTATION:
  ✓ Hashes passwords with bcryptjs
  ✓ Validates required fields
  ✓ Checks email uniqueness
  ✓ Generic error messages for security
  ✓ Uses HTTP status codes correctly
  ✓ Error handling with try/catch

IMPROVEMENTS FOR PRODUCTION:

1. Implement middleware for authentication
2. Add JWT tokens for stateless sessions
3. Implement refresh tokens
4. Add email verification
5. Enforce password complexity
6. Add rate limiting
7. Implement HTTPS
8. Add request validation schema
9. Log all authentication events
10. Add two-factor authentication


================================================================================
                    TESTING AUTHENTICATION
================================================================================

USING POSTMAN OR CURL:

Register New User:
  curl -X POST http://localhost:5000/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{
      "name": "Test User",
      "email": "test@example.com",
      "password": "TestPass123"
    }'

Login With Credentials:
  curl -X POST http://localhost:5000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "password": "TestPass123"
    }'

Test Invalid Credentials:
  curl -X POST http://localhost:5000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "password": "WrongPassword"
    }'


================================================================================
                    END OF ROUTES DOCUMENTATION
================================================================================
*/
