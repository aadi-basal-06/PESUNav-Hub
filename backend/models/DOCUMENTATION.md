/*
================================================================================
                    BACKEND MODELS FOLDER DOCUMENTATION
                    Mongoose Schema Definitions for Database
================================================================================

DIRECTORY PURPOSE:
  The models folder contains Mongoose schema definitions that define the
  structure and rules for MongoDB documents. Each file exports a model that
  can be used throughout the backend for database operations (create, read,
  update, delete).

DESIGN PATTERN:
  Each model file:
  1. Imports mongoose
  2. Defines a schema with fields and validation rules
  3. Exports a mongoose model
  4. Model is imported in routes for database operations


================================================================================
                          FILE: User.js
================================================================================

FULL PATH: backend/models/User.js

PURPOSE:
  Defines the User schema for MongoDB collection storing student accounts
  and authentication information for PESUNav Hub.

IMPORT STATEMENT:
  const mongoose = require('mongoose');

SCHEMA DEFINITION:
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }
  }, { timestamps: true });


FIELD BREAKDOWN:

1. name
   ────────────────────────────────────────────────────────────────────────
   Type: String
   
   Constraints:
     required: true     Field must be provided when creating user
                       Validation error if omitted
   
     trim: true        Automatically removes leading/trailing whitespace
                       Example: "  John Doe  " becomes "John Doe"
   
   Purpose: Store student's full name
   
   Example Values:
     - "Aadi Basal"
     - "John Doe"
     - "Aditya Kumar"
     - "Himansh Ahuja"
   
   Database Behavior:
     - Not indexed (searches by email instead)
     - No length restrictions (MongoDB default)
     - Stored as-is except for trimming


2. email
   ────────────────────────────────────────────────────────────────────────
   Type: String
   
   Constraints:
     required: true     Field must be provided when creating user
   
     unique: true       No two users can have same email
                       Mongoose creates unique index on this field
                       Duplicate email throws validation error
                       Error message: "E11000 duplicate key error"
   
     lowercase: true    Automatically converts email to lowercase
                       Example: "John@Test.Com" becomes "john@test.com"
                       Ensures consistent email comparison
   
   Purpose: Student's email address (used as unique identifier and login)
   
   Example Values:
     - "john@pes.edu"
     - "jane.doe@gmail.com"
     - "student@university.edu"
   
   Database Behavior:
     - Indexed for fast lookups
     - Used in User.findOne({ email }) queries
     - Enforced unique constraint prevents duplicates
   
   Security Note:
     Unique constraint prevents account enumeration by checking if email
     is already registered. Login endpoint returns same error for
     "user not found" and "wrong password" to hide this information.


3. password
   ────────────────────────────────────────────────────────────────────────
   Type: String
   
   Constraints:
     required: true     Field must be provided when creating user
   
   Purpose: Store hashed password for user authentication
   
   Important: This field stores HASHED password, not plaintext
             bcryptjs converts plaintext to hash before saving
   
   Example Hash:
     "$2a$10$kHn1h8d4H3eBqKw.7c1F..dGNHkv0D.KvM6X2Cx8D8K4XG9x8XKUm"
   
   Database Behavior:
     - Stored as bcrypt hash (always starts with $2a$ or $2b$)
     - Never sent to frontend on login response
     - Compared using bcryptjs.compare() during authentication
     - Cannot be reversed (one-way hash)
   
   Security:
     - Password hashing adds security
     - If database is breached, passwords still protected
     - Plaintext password never stored or transmitted


SCHEMA OPTIONS (Second Parameter):

  { timestamps: true }
  
  Effect: Automatically adds two fields to every user document:
  
    createdAt:  ISO 8601 timestamp when user created
                Example: "2024-01-15T10:30:45.123Z"
                Used to track account creation time
    
    updatedAt:  ISO 8601 timestamp when user last modified
                Example: "2024-01-16T14:25:30.456Z"
                Used to track last profile update


EXPORT STATEMENT:

  module.exports = mongoose.model('User', userSchema);
  
  Parameters:
    'User':       Model name (singular, capitalized)
    userSchema:   Schema definition object
  
  Behavior:
    - Creates MongoDB collection called 'users' (lowercase plural)
    - Exports User model for import in other files
    - Model provides database methods: create, findOne, find, save, etc.


================================================================================
                    DATABASE OPERATIONS WITH USER MODEL
================================================================================

USER MODEL METHODS (Available after import):

1. USER.CREATE() or new USER().save()
   ────────────────────────────────────
   Purpose: Create new user document
   
   Example:
     const user = new User({
       name: "John Doe",
       email: "john@example.com",
       password: "$2a$10$..." // hashed password
     });
     await user.save();
   
   Returns: Saved user document with _id and timestamps
   
   Validation: Checks required fields, runs constraints
   
   Throws: ValidationError if constraints violated
           (e.g., missing required field, duplicate email)
   
   Usage in code:
     File: routes/auth.js
     Context: POST /api/auth/register endpoint


2. USER.FINDONE()
   ────────────────────────────────────
   Purpose: Find single user document by criteria
   
   Example:
     const user = await User.findOne({ email });
   
   Parameters: Query object with field:value pairs
   
   Returns: Single user document or null if not found
   
   Common Queries:
     User.findOne({ email: "john@test.com" })
     User.findOne({ _id: objectId })
   
   Usage in code:
     File: routes/auth.js
     Context: POST /api/auth/register (check if exists)
     Context: POST /api/auth/login (find user to verify password)


3. USER.FIND()
   ────────────────────────────────────
   Purpose: Find multiple users matching criteria
   
   Example:
     const users = await User.find({ department: "CSE" });
   
   Returns: Array of user documents (empty array if no matches)
   
   Can chain methods:
     User.find({}).limit(10)
     User.find({}).sort({ createdAt: -1 })
   
   Current usage: Not used in current codebase
   Future use: Admin endpoints to list all users


4. USER.FINDBYID()
   ────────────────────────────────────
   Purpose: Find user by MongoDB _id
   
   Example:
     const user = await User.findById(userId);
   
   Returns: User document or null
   
   Future use: Verify authenticated users, profile retrieval


5. USER.FINDONEANDUPDATE()
   ────────────────────────────────────
   Purpose: Find user and update in one operation
   
   Example:
     const user = await User.findOneAndUpdate(
       { email: "john@test.com" },
       { name: "Jane Doe" },
       { new: true }
     );
   
   Returns: Updated user document
   
   Future use: Profile updates, password reset


6. USER.DELETEONE()
   ────────────────────────────────────
   Purpose: Delete single user document
   
   Example:
     await User.deleteOne({ email: "john@test.com" });
   
   Returns: Deletion result object
   
   Future use: Account deletion, admin functions


================================================================================
                    VALIDATION AND CONSTRAINTS
================================================================================

REQUIRED FIELDS:
  name:     Must be provided, cannot be empty
  email:    Must be provided, cannot be empty
  password: Must be provided, cannot be empty
  
  Behavior: mongoose throws ValidationError if omitted

UNIQUE CONSTRAINT:
  email:    No two documents can have same email value
  
  Behavior: 
    - Mongoose creates unique index on email field
    - Throws E11000 duplicate key error on violation
    - Error occurs at save() operation
    - Used to prevent multiple accounts per email

AUTO-FORMATTING:
  name:     Trimmed (removes whitespace)
  email:    Lowercase converted (ensures consistency)
  
  Behavior: Applied automatically on save


================================================================================
                    DATABASE STRUCTURE EXAMPLE
================================================================================

SAMPLE USER DOCUMENT IN MONGODB:

{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Smith",
  "email": "john.smith@pes.edu",
  "password": "$2a$10$kHn1h8d4H3eBqKw.7c1F..dGNHkv0D.KvM6X2Cx8D8K4XG9x8XKUm",
  "createdAt": ISODate("2024-01-15T10:30:45.123Z"),
  "updatedAt": ISODate("2024-01-16T14:25:30.456Z"),
  "__v": 0
}

FIELD EXPLANATIONS:

_id:        MongoDB's unique identifier (auto-generated)
name:       "John Smith" (trimmed)
email:      "john.smith@pes.edu" (lowercase)
password:   bcryptjs hash (secure, not reversible)
createdAt:  Account creation timestamp
updatedAt:  Last account modification timestamp
__v:        Version number (managed by Mongoose, ignore)


================================================================================
                    INTEGRATION WITH BACKEND ROUTES
================================================================================

HOW USER.JS IS USED:

File: backend/routes/auth.js

1. IMPORT:
   const User = require('../models/User');

2. REGISTRATION ENDPOINT (POST /api/auth/register):
   - Validate all fields provided
   - User.findOne({ email }) - Check if email exists
   - If not exists, hash password with bcryptjs
   - Create new User document with name, email, password
   - user.save() - Persist to database
   - Return success/error response

3. LOGIN ENDPOINT (POST /api/auth/login):
   - User.findOne({ email }) - Find user in database
   - If user found, compare password using bcryptjs
   - Return user data (name, email) on success
   - Return error on failure


================================================================================
                    FUTURE MODEL EXPANSIONS
================================================================================

POTENTIAL NEW MODELS:

1. StudentProfile
   Fields: userId, studentId, department, phone, imageUrl
   Purpose: Extended profile information

2. ClassSchedule
   Fields: userId, classId, title, instructor, time, room
   Purpose: Store student class schedule

3. StudySpace
   Fields: name, location, coordinates, capacity, features
   Purpose: Campus study space information

4. Feedback
   Fields: userId, email, subject, message, createdAt
   Purpose: Store user feedback messages

5. Event
   Fields: title, date, location, description, capacity
   Purpose: Campus events information

6. SafetyAlert
   Fields: type, message, severity, location, timestamp
   Purpose: Safety notifications and alerts


================================================================================
                    SCHEMA EVOLUTION BEST PRACTICES
================================================================================

WHEN ADDING NEW FIELDS:

1. Add field to schema with appropriate type and constraints
2. Decide if field is required for existing documents
3. If required, provide default value
4. Consider adding indexes for frequently queried fields
5. Update related route handlers
6. Update API documentation
7. Handle backward compatibility

EXAMPLE: Adding Department Field

  Before:
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
    });

  After:
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      department: { type: String, default: null }
    });


================================================================================
                    PERFORMANCE CONSIDERATIONS
================================================================================

INDEXING:
  Automatic:
    - _id field (always indexed)
    - email field (indexed due to unique constraint)
  
  Benefits:
    - Faster User.findOne({ email }) queries
    - Unique constraint enforcement
  
  Without indexes, queries would need to scan entire collection

DOCUMENT SIZE:
  Current average document: ~500 bytes
  Growth limit: No theoretical limit without custom max document size

QUERY OPTIMIZATION:
  Current queries are already optimal:
    User.findOne({ email }) - Uses email index
    No projection needed (all fields are small)


================================================================================
                    ERROR HANDLING RELATED TO USER MODEL
================================================================================

COMMON ERRORS:

1. ValidationError
   Cause: Required field missing or constraint violation
   Example: Creating user without name field
   Handler: try/catch in routes/auth.js

2. MongoError (E11000)
   Cause: Duplicate email violation
   Message: "E11000 duplicate key error collection: db.users index: email_1"
   Handler: Caught and returned as "User already exists"

3. MongooseError
   Cause: Connection or database issues
   Handler: Caught in server.js, process exits


================================================================================
                    END OF MODELS DOCUMENTATION
================================================================================
*/
