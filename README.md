# PESUNav Hub

**Smart Campus Navigation & Student Companion Platform**

---

## Overview

PESUNav Hub is an innovative web application designed for PES University students to efficiently navigate their campus, manage academic schedules, discover study spaces, and access essential campus safety information. The platform combines geolocation features, interactive mapping, and collaborative tools to enhance the student experience.

Built with the **MERN stack** (MongoDB, Express, React, Node.js), PESUNav Hub features a modern Vite-powered React frontend with a robust Node.js/Express backend API, providing a seamless full-stack application for campus navigation and student services.

---

## Key Features

### 🗺️ **Interactive Campus Map**
- Real-time campus map with OpenStreetMap integration
- Custom markers for study spaces, libraries, cafes, and labs
- Click-to-view space details and descriptions
- Centered on PES University main campus (Latitude: 12.861306, Longitude: 77.664708)

### 📚 **Study Spaces Directory**
- Browse 5+ campus study locations
- Filter by space type (Library, Study Areas, Cafes, Labs, Discussion Spaces)
- View detailed information including capacity, hours, and features
- Interactive detail panel with space amenities

### 👤 **Student Profile Management**
- Create and customize your profile
- Upload profile avatar with image preview
- Edit personal information (name, email, student ID, department)
- localStorage persistence for seamless experience

### 📅 **Smart Class Scheduler**
- Add and manage class schedule
- Organize courses by day of week
- Store instructor names, times, and room locations
- Filter schedule by day
- Delete classes with ease
- Auto-save to browser storage

### 🔐 **Secure Authentication**
- User registration with email and password
- Secure login system with bcryptjs password hashing
- Password confirmation validation
- Error handling and user feedback
- Optional student profile data (ID, department)

### 🛡️ **Campus Safety Information**
- Emergency contact quick access (Police: 112, Ambulance: 102, Fire: 101)
- Campus-specific emergency number (+91 80 40 92 5555)
- 6 comprehensive safety categories:
  - Personal Safety guidelines
  - Building Safety procedures
  - Event Safety tips
  - Digital Safety best practices
  - Travel Safety recommendations
  - Health & Wellness resources
- Important numbers quick reference
- Campus security office locations

### 💬 **Feedback & Contact System**
- Submit feedback, bug reports, and suggestions
- Contact information section
- Email, phone, and office location details
- Office hours and social media links
- FAQ section with common questions

### ℹ️ **About & Project Information**
- Mission statement and vision
- Key features overview
- How-it-works guide (4-step process)
- Technology stack information
- Core values and commitments
- Comprehensive FAQ section

### 📱 **Responsive Design**
- Mobile-friendly interface
- Optimized for tablets and desktops
- Adaptive layouts for screens < 860px width
- Touch-friendly navigation and buttons

---

## Technology Stack

### **Frontend**
- **React 19.x** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and development server
- **React Router 7.x** - Client-side routing and navigation
- **Axios 1.13.x** - HTTP client for API requests
- **Leaflet 1.9.x** - Interactive mapping library
- **React Leaflet 5.x** - React bindings for Leaflet
- **CSS3 with Custom Properties** - Responsive design system
- **Open Sans Font** - Google Fonts typography

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express 5.x** - Web application framework
- **MongoDB 8.x** - NoSQL document database
- **Mongoose 8.x** - MongoDB object modeling (ODM)
- **bcryptjs 3.x** - Password hashing and security
- **CORS 2.8.x** - Cross-origin request handling
- **dotenv 17.x** - Environment variable management

### **Design & Architecture**
- **Component-based architecture** - Modular React components
- **RESTful API design** - Clean API endpoints
- **CSS Custom Properties** - Unified design system
- **localStorage** - Client-side data persistence
- **Git version control** - Source code management

---

## Getting Started

### Prerequisites
- **Node.js** (LTS v18+ recommended)
- **npm** or **yarn** package manager
- **MongoDB** instance (local installation or MongoDB Atlas cloud)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pesunavhub.git
   cd pesunavhub
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Create .env file** in `backend/` directory
   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/pesunavhub
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

**Terminal 1 - Start Backend**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Start Frontend**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

**Production Build**
```bash
# Build frontend for production
cd frontend
npm run build
```

---

## Project Structure

```
pesunavhub/
├── backend/                    # Node.js/Express backend
│   ├── models/                 # MongoDB schemas
│   │   └── User.js            # User model
│   ├── routes/                 # API endpoints
│   │   └── auth.js            # Authentication routes
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
│
├── frontend/                   # React Vite frontend
│   ├── src/
│   │   ├── pages/             # Page components (11 files)
│   │   │   ├── Home.jsx       # Landing page
│   │   │   ├── Login.jsx      # Login form
│   │   │   ├── Register.jsx   # Registration form
│   │   │   ├── Profile.jsx    # Profile & scheduler
│   │   │   ├── Map.jsx        # Campus map
│   │   │   ├── StudySpaces.jsx # Study spaces directory
│   │   │   ├── Feedback.jsx   # Feedback form
│   │   │   ├── Safety.jsx     # Safety information
│   │   │   └── About.jsx      # About page
│   │   ├── styles/            # Component CSS
│   │   │   ├── Map.css
│   │   │   ├── Feedback.css
│   │   │   ├── Safety.css
│   │   │   ├── StudySpaces.css
│   │   │   └── About.css
│   │   ├── App.jsx            # Root component
│   │   ├── main.jsx           # React entry point
│   │   ├── index.css          # Global styles
│   │   └── assets/            # Images and icons
│   ├── vite.config.js         # Vite configuration
│   ├── index.html             # HTML template
│   └── package.json           # Frontend dependencies
│
├── PROJECT_DOCUMENTATION.md   # Comprehensive documentation
├── README.md                  # This file
└── package.json               # Root package file
```

---

## API Endpoints

### Authentication Routes
All endpoints prefixed with `/api/auth`

#### **POST /register**
Create a new user account
```json
Request: {
  "name": "John Doe",
  "email": "john@pes.edu",
  "password": "securePassword123"
}
Response: {
  "message": "Registration successful"
}
```

#### **POST /login**
Authenticate user
```json
Request: {
  "email": "john@pes.edu",
  "password": "securePassword123"
}
Response: {
  "message": "Login successful",
  "user": {
    "name": "John Doe",
    "email": "john@pes.edu"
  }
}
```

---

## Routes & Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page with introduction |
| `/login` | Login | User authentication |
| `/register` | Register | New account creation |
| `/profile` | Profile | Profile management & class scheduler |
| `/map` | Map | Interactive campus map |
| `/study-spaces` | StudySpaces | Study spaces directory |
| `/feedback` | Feedback | Feedback form & contact info |
| `/safety` | Safety | Safety procedures & emergency contacts |
| `/about` | About | Project information & FAQ |

---

## Security Features

✅ **Password Security**
- bcryptjs hashing with 10 salt rounds
- Passwords never stored in plaintext
- Time-constant comparison prevents timing attacks

✅ **Data Validation**
- Required field validation on frontend and backend
- Email uniqueness enforced at database level
- Password confirmation validation

✅ **API Security**
- CORS enabled for safe cross-origin requests
- JSON body parsing with size limits
- Error message sanitization

✅ **Environment Management**
- Sensitive credentials in .env files
- Environment variables for configuration
- Never commit secrets to repository

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

## Color Palette

The application uses a sophisticated color scheme:

- **Navy Blue** `#12214A` - Primary background
- **Medium Navy** `#1C2A6D` - Navigation accent
- **Dark Grey** `#2D3748` - Primary text
- **Medium Grey** `#4A5568` - Secondary text
- **White** `#FFFFFF` - Content background
- **Golden Yellow** `#FFD700` - Focus/highlight

---

## Future Enhancements

### Planned Features
- 🔐 JWT token authentication for persistent sessions
- 📧 Email verification on registration
- 🔑 Password reset functionality
- 🌙 Dark mode toggle
- 📞 Real-time chat support
- 📍 Turn-by-turn navigation
- 🎫 Class booking system
- ⭐ User ratings and reviews
- 🤝 Social features (friend connections)
- 📱 React Native mobile app
- 📴 Offline support with Service Workers

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your work (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Verify MongoDB is running locally or check MongoDB Atlas credentials
- Ensure MONGO_URI in .env is correct
- Check network connectivity

**Port Already in Use**
- Change PORT in .env or stop other services using port 5000
- Use `lsof -i :5000` to find process using the port

### Frontend Issues

**Dependencies Error**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache with `npm cache clean --force`

**Map Not Loading**
- Ensure backend API is running
- Check browser console for CORS errors
- Verify OpenStreetMap CDN is accessible

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support & Documentation

- 📖 **Full Documentation**: See `PROJECT_DOCUMENTATION.md` for detailed function-level documentation
- 🐛 **Report Issues**: Use the Feedback page or create a GitHub issue
- 📧 **Contact**: support@pesunavhub.edu

---

## Acknowledgments

- PES University for inspiring the project
- React and Node.js communities
- Leaflet for mapping functionality
- MongoDB for database support
- All contributors and supporters

---

**PESUNav Hub** - Making campus navigation smarter, one student at a time! 🎓📍
