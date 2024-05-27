const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

// Apply middleware for all routes to require JWT token
router.post('/create', auth, todoController.createTodo);
router.post('/update', auth, todoController.updateTodo);
router.post('/markDone', auth, todoController.markDone);
router.post('/delete', auth, todoController.deleteTodo);
router.get('/view', auth, todoController.viewTodos); // Changed to GET method

module.exports = router;
