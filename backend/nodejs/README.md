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