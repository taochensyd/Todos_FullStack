const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth'); // Import the middleware

// Separate routes for registration, login, and update
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/update', auth, userController.updateUserDetails); // Apply middleware for update

module.exports = router;
