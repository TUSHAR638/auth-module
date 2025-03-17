# Backend Authentication API

## Features
- User Signup & Login using JWT authentication.
- Securely stored passwords using bcrypt.
- CRUD operations for user management.
- Express.js for backend API handling.
- MongoDB as the database.

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB database URL

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/backend-auth-api.git
   cd backend-auth-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file:
   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Run the server:
   ```sh
   npm start
   ```

## API Routes

### Authentication
- `POST /api/auth/signup` → Register a new user
- `POST /api/auth/login` → Login and get a token
- `POST /api/auth/logout` → Logout

### User Management (Requires Token)
- `GET /api/users/` → Get all users
- `GET /api/users/:id` → Get user by ID
- `PUT /api/users/:id` → Update user
- `DELETE /api/users/:id` → Delete user

## License
This project is licensed under the MIT License.
