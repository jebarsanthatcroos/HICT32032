# Week 4 - JWT Authentication (Express.js)

A simple Express.js API demonstrating JWT-based authentication with role-based access control, password hashing, and a browser-based test UI.

## Features

- User login with hashed passwords (bcrypt)
- JWT token generation on successful login
- Protected route secured with token verification middleware
- Role-based user data (admin / user)
- Environment variables for secrets (`dotenv`)
- Simple static HTML page for manual testing (no Postman required)

## Tech Stack

- Node.js
- Express 5
- jsonwebtoken
- bcrypt
- dotenv

## Setup

1. Clone the repo and install dependencies:
```bash
   npm install
```

2. Create a `.env` file in the root:
SECRET_KEY=your_secret_key_here
PORT=3000

3. Start the server:
```bash
   npm run dev
```

4. Open your browser at:
http://localhost:3000


> Important: Access the app through `http://localhost:3000`, not by opening `public/index.html` directly. Opening the file with `file://` will break login/dashboard requests due to CORS restrictions.

## API Endpoints

### `POST /login`

Authenticates a user and returns a JWT token.

**Request body:**
```json
{
  "username": "jebarsan",
  "password": "Admin@123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### `GET /dashboard`

Protected route. Requires a valid JWT in the `Authorization` header.

**Headers:**
Authorization: Bearer <token>

**Response:**
```json
{
  "message": "Welcome, jebarsan!",
  "yourRole": "admin"
}
```

## Test Users

| Username    | Password    | Role  |
|-------------|-------------|-------|
| jebarsan    | Admin@123   | admin |
| thatcroos   | User@123    | user  |

## Notes

- Passwords are hashed with bcrypt before comparison — never stored or compared as plain text.
- JWT tokens expire after 1 hour.
- `SECRET_KEY` is loaded from `.env` and must never be committed to version control.

## Author

Jebarsan Thatcroos