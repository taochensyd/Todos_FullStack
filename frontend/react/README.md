Frontend Architecture
React Application
react-app/
├── public/              # Public assets
├── src/
│   ├── components/      # Reusable components (e.g., TaskList, TaskItem)
│   ├── pages/           # Application pages (e.g., Home, Login, Register)
│   ├── services/        # Services for API calls
│   ├── contexts/        # Context providers for state management
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
├── json-server/         # Mock API using json-server
│   ├── db.json          # Mock database file
│   └── server.js        # Server configuration
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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
