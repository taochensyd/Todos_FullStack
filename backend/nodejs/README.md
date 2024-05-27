Backend Architecture
Node.js with Express
node-express/
├── src/
│   ├── controllers/     # Request handlers (e.g., authController, taskController)
│   ├── models/          # Data models (e.g., User, Task)
│   ├── routes/          # Route definitions (e.g., authRoutes, taskRoutes)
│   ├── middleware/      # Middleware functions (e.g., authMiddleware)
│   ├── config/          # Configuration files (e.g., dbConfig, jwtConfig)
│   ├── app.js           # Main application file
│   └── server.js        # Server entry point
├── .env                 # Environment variables
└── package.json         # Project configuration and dependencies

# API Endpoint Documentation

## User Endpoints

### 1. User Registration
- **Endpoint**: `/api/user`
- **Method**: POST
- **Body**:
  {
    "type": "register",
    "username": "user123",
    "password": "password123",
    "email": "user@example.com"
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "User registered successfully",
    "userId": 1
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Username or email already exists"
  }

### 2. User Login
- **Endpoint**: `/api/user`
- **Method**: POST
- **Body**:
  {
    "type": "login",
    "username": "user123",
    "password": "password123"
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "User logged in successfully",
    "token": "jwt-token-here"
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Invalid username or password"
  }

### 3. Update Account Details
- **Endpoint**: `/api/user`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "update",
    "username": "user123",
    "newName": "newName123",
    "newPassword": "newPassword123"
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "Account details updated successfully"
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to update account details"
  }

## To-Do Item Endpoints

### 1. Create To-Do Item
- **Endpoint**: `/api/todo`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "create",
    "title": "New Task",
    "description": "Task description",
    "dueDate": "01/01/2025 12:00",
    "importance": 3,
    "urgency": 2
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "To-Do item created successfully",
    "todoId": 1
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to create To-Do item"
  }

### 2. Update To-Do Item
- **Endpoint**: `/api/todo`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "update",
    "todoId": 1,
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "dueDate": "02/01/2025 12:00",
    "importance": 4,
    "urgency": 3
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "To-Do item updated successfully"
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to update To-Do item"
  }

### 3. Mark To-Do Item as Done
- **Endpoint**: `/api/todo`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "markDone",
    "todoId": 1
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "To-Do item marked as done"
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to mark To-Do item as done"
  }

### 4. Delete To-Do Item
- **Endpoint**: `/api/todo`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "delete",
    "todoId": 1
  }
- **Successful Response**:
  {
    "status": "success",
    "message": "To-Do item flagged as deleted"
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to delete To-Do item"
  }

### 5. View User's To-Do Items
- **Endpoint**: `/api/todo`
- **Method**: POST
- **Headers**:
  Authorization: Bearer jwt-token-here
- **Body**:
  {
    "type": "view",
    "username": "user123"
  }
- **Successful Response**:
  {
    "status": "success",
    "todos": [
      {
        "todoId": 1,
        "title": "Task Title",
        "description": "Task description",
        "dueDate": "01/01/2025 12:00",
        "importance": 3,
        "urgency": 2,
        "status": "pending",
        "created_at": "2024-01-01T12:00:00Z",
        "updated_at": "2024-01-01T12:00:00Z"
      }
    ]
  }
- **Fail Response**:
  {
    "status": "fail",
    "message": "Failed to retrieve To-Do items"
  }

## JWT Authentication

### JWT Token Structure
The JWT token will be used for authentication for each API call after login. The token should be included in the `Authorization` header of the request.

**Example Header**:
Authorization: Bearer jwt-token-here

### Generating JWT Token
On successful login, a JWT token is generated and returned to the user. The token contains user information and an expiration time.

### Verifying JWT Token
For each protected endpoint, the server verifies the JWT token to ensure the user is authenticated.