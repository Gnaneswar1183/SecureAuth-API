# 🔐 SecureAuthAPI - Authentication & User Management API

A secure, production-ready REST API for user authentication and management, built with Node.js, Express, and MongoDB.

## Features

- 👤 User registration with email verification
- 🔑 Secure login with JWT
- 🔄 Token refresh mechanism
- 📧 Password reset via email
- 👥 User profile management
- 👮 Role-based access control (Admin/User)
- 🛡️ Protected routes with middleware

## Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Nodemailer for email services
- Express Validator for input validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance
- Email service account (e.g., Gmail)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd auth-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/auth-api
JWT_SECRET=your-super-secret-jwt-key
JWT_ACCESS_EXPIRATION=15m
JWT_REFRESH_EXPIRATION=7d
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
FRONTEND_URL=http://localhost:3000
PASSWORD_RESET_EXPIRATION=30
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Verify Email
```http
POST /api/auth/verify-email
Content-Type: application/json

{
  "token": "verification-token"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer <access-token>
```

#### Forgot Password
```http
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

#### Reset Password
```http
POST /api/auth/reset-password
Content-Type: application/json

{
  "token": "reset-token",
  "newPassword": "newpassword123"
}
```

#### Refresh Token
```http
POST /api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "refresh-token"
}
```

### User Management

#### Get Current User Profile
```http
GET /api/users/me
Authorization: Bearer <access-token>
```

#### Update Profile
```http
PUT /api/users/me
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "newemail@example.com"
}
```

#### Change Password
```http
PUT /api/users/me/password
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
```

### Admin Routes

#### Get All Users
```http
GET /api/users
Authorization: Bearer <access-token>
```

#### Get User by ID
```http
GET /api/users/:userId
Authorization: Bearer <access-token>
```

#### Update User Role
```http
PUT /api/users/:userId
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "role": "admin"
}
```

#### Delete User
```http
DELETE /api/users/:userId
Authorization: Bearer <access-token>
```

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Email verification
- Protected routes with middleware
- Input validation and sanitization
- HTTP security headers with helmet
- CORS protection
- Rate limiting (recommended to add)
- Request validation using express-validator

## Error Handling

The API uses a consistent error response format:

```json
{
  "success": false,
  "message": "Error message description"
}
```

## Success Response Format

```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 
