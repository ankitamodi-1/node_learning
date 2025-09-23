# Employee Management API

A complete Node.js API built with Express.js and MongoDB for managing employees with JWT authentication and role-based access control.

## Features

- 🔐 JWT Authentication (Signup/Login)
- 👥 User Management with Role-based Access (Admin/Account User)
- 👷 Employee CRUD Operations
- 🗑️ Soft Delete for Employees
- 📊 Pagination Support
- ✅ Input Validation
- 🔒 Password Hashing with bcrypt
- 📝 Comprehensive Error Handling

## Project Structure

```
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── employeeController.js # Employee CRUD operations
├── middleware/
│   ├── auth.js             # JWT authentication middleware
│   └── validation.js       # Input validation rules
├── models/
│   ├── User.js             # User schema
│   └── Employee.js         # Employee schema
├── routes/
│   ├── auth.js             # Authentication routes
│   └── employees.js        # Employee routes
├── server.js               # Main application file
├── package.json            # Dependencies
└── env.template            # Environment variables template
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the environment template and configure your variables:

```bash
cp env.template .env
```

Update the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d
```

### 3. Database Setup

Make sure MongoDB is running on your system. The application will connect to the database specified in `MONGODB_URI`.

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your .env file).

## API Endpoints

### Authentication

#### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "user_type": "admin" // optional: "admin" or "account_user" (default)
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "user_type": "admin"
    },
    "token": "jwt_token_here"
  }
}
```

#### POST /api/auth/login
Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "user_type": "admin"
    },
    "token": "jwt_token_here"
  }
}
```

### Employees (Protected Routes)

All employee routes require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

#### GET /api/employees
Get all employees with pagination and filtering.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status ("active" or "inactive")
- `is_manager` (optional): Filter by manager status (true/false)

**Response:**
```json
{
  "success": true,
  "message": "Employees retrieved successfully",
  "data": {
    "employees": [...],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_employees": 50,
      "has_next": true,
      "has_prev": false
    }
  }
}
```

#### GET /api/employees/:id
Get a specific employee by ID.

#### POST /api/employees (Admin Only)
Create a new employee.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "salary": 75000,
  "is_manager": true,
  "dob": "1990-05-15",
  "status": "active"
}
```

#### PUT /api/employees/:id (Admin Only)
Update an existing employee.

**Request Body:** (All fields optional)
```json
{
  "name": "Jane Smith Updated",
  "salary": 80000,
  "is_manager": false,
  "status": "inactive"
}
```

#### DELETE /api/employees/:id (Admin Only)
Soft delete an employee (sets deleted_at timestamp).

## Database Models

### User Model
- `id`: Auto-generated MongoDB ObjectId
- `name`: String (required)
- `email`: String (unique, required)
- `password`: String (hashed, required)
- `user_type`: Enum ["admin", "account_user"]
- `created_at`: Date (auto-generated)
- `updated_at`: Date (auto-updated)

### Employee Model
- `id`: Auto-generated MongoDB ObjectId
- `name`: String (max 255 characters, required)
- `salary`: Number (double precision, required)
- `is_manager`: Boolean (default: false)
- `dob`: Date (required)
- `status`: Enum ["active", "inactive"] (default: "active")
- `deleted_at`: Date (nullable, for soft delete)
- `created_at`: Date (auto-generated)
- `updated_at`: Date (auto-updated)

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [...] // Validation errors (if any)
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized (invalid/missing token)
- `403`: Forbidden (insufficient permissions)
- `404`: Not Found
- `500`: Internal Server Error

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Input validation and sanitization
- CORS enabled
- Environment variable configuration

## Development

### Running in Development Mode
```bash
npm run dev
```

This uses nodemon for automatic server restarts on file changes.

### Environment Variables
Make sure to set up your `.env` file with the required variables before running the application.

## License

ISC
