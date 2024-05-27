const db = require('../config/db');

exports.createTodo = async (req, res) => {
    const { title, description, dueDate, importance, urgency } = req.body;
    const userId = req.user.userId;

    try {
        const [result] = await db.query(
            'INSERT INTO TodoItems (userId, title, description, dueDate, importance, urgency) VALUES (?, ?, ?, ?, ?, ?)',
            [userId, title, description, dueDate, importance, urgency]
        );
        res.status(201).json({ status: 'success', message: 'To-Do item created successfully', todoId: result.insertId });
    } catch (err) {
        console.error('Error creating to-do item:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to create to-do item' });
    }
};

exports.updateTodo = async (req, res) => {
    const { todoId, title, description, dueDate, importance, urgency } = req.body;
    const userId = req.user.userId;

    try {
        const [result] = await db.query(
            'UPDATE TodoItems SET title = ?, description = ?, dueDate = ?, importance = ?, urgency = ? WHERE todoId = ? AND userId = ?',
            [title, description, dueDate, importance, urgency, todoId, userId]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'fail', message: 'To-Do item not found' });
        }
        res.status(200).json({ status: 'success', message: 'To-Do item updated successfully' });
    } catch (err) {
        console.error('Error updating to-do item:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to update to-do item' });
    }
};

exports.markDone = async (req, res) => {
    const { todoId } = req.body;
    const userId = req.user.userId;

    try {
        const [result] = await db.query(
            'UPDATE TodoItems SET status = ? WHERE todoId = ? AND userId = ?',
            ['done', todoId, userId]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'fail', message: 'To-Do item not found' });
        }
        res.status(200).json({ status: 'success', message: 'To-Do item marked as done' });
    } catch (err) {
        console.error('Error marking to-do item as done:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to mark to-do item as done' });
    }
};

exports.deleteTodo = async (req, res) => {
    const { todoId } = req.body;
    const userId = req.user.userId;

    try {
        const [result] = await db.query(
            'UPDATE TodoItems SET isDeleted = ? WHERE todoId = ? AND userId = ?',
            [true, todoId, userId]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'fail', message: 'To-Do item not found' });
        }
        res.status(200).json({ status: 'success', message: 'To-Do item flagged as deleted' });
    } catch (err) {
        console.error('Error deleting to-do item:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to delete to-do item' });
    }
};

exports.viewTodos = async (req, res) => {
    const userId = req.user.userId;

    try {
        const [todos] = await db.query('SELECT * FROM TodoItems WHERE userId = ? AND isDeleted = false', [userId]);
        res.status(200).json({ status: 'success', todos });
    } catch (err) {
        console.error('Error retrieving to-do items:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to retrieve to-do items' });
    }
};
