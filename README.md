Authentication Module (Node.js & MongoDB)
🚀 Overview
This is a JWT-based authentication module built using Node.js, Express, and MongoDB. It provides secure user authentication and CRUD operations for user management.
🛠️ Features
✅ User Signup with encrypted passwords
✅ User Login with JWT token generation
✅ Secure Logout functionality
✅ CRUD operations for user management
✅ Protected Routes using JWT authentication
✅ MongoDB for database storage
📂 Project Structure
authentication-module/ 
│── controllers/ # Business logic for authentication & users 
│── models/ # Database schema (User model) 
│── routes/ # API routes for auth & users 
│── middleware/ # JWT authentication middleware 
│── config/ # Database connection setup 
│── .env # Environment variables 
│── server.js # Main application entry point 
│── package.json # Project dependencies 
│── README.md # Documentation
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JSON Web Token (JWT)
Security: bcrypt.js (for password hashing) 
🔧 Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/TUSHAR638/authentication-module.git 
cd authentication-module
2️⃣ Install Dependencies
npm install
3️⃣ Create a .env File
PORT=5000 
MONGO_URI=your_mongodb_connection_string 
JWT_SECRET=your_secret_key 
4️⃣ Run the Server
npm start
Server will start on http://localhost:5000 🚀
📌 API Endpoints
🔐 Authentication Routes
Method Endpoint Description
POST /api/auth/signup Register a new user
POST /api/auth/login Login and get JWT token
POST /api/auth/logout Logout (Frontend logic)
👤 User Management Routes (Requires Token)
Method Endpoint Description
GET /api/users/ Get all users
GET /api/users/:id Get user by ID
PUT /api/users/:id Update user
DELETE /api/users/:id Delete user
🛡️ Security Measures
✅ Password Hashing: Uses bcrypt to securely hash passwords
✅ JWT Authentication: Protects private routes
✅ MongoDB Validation: Ensures unique & valid user data 


