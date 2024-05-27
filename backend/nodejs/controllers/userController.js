const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-jwt-secret';
const JWT_EXPIRATION = '1h';

// Registration function
exports.registerUser = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const [existingUser] = await db.query('SELECT * FROM Users WHERE email = ? OR username = ?', [email, username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ status: 'fail', message: 'Email or username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.query('INSERT INTO Users (email, username, password) VALUES (?, ?, ?)', [email, username, hashedPassword]);
        res.status(201).json({ status: 'success', message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
        console.error('Error registering user:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Error registering user' });
    }
};

// Login function
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(400).json({ status: 'fail', message: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(password, user[0].password);
        if (!validPassword) {
            return res.status(400).json({ status: 'fail', message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user[0].userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
        res.status(200).json({ status: 'success', message: 'User logged in successfully', token });
    } catch (err) {
        console.error('Error logging in user:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Error logging in user' });
    }
};

// Update user details function
exports.updateUserDetails = async (req, res) => {
    const { newName, newPassword } = req.body;

    try {
        const userId = req.user.userId;

        // Log incoming request data
        console.log('Update request received with data:', req.body);

        // Build the update query dynamically
        const fieldsToUpdate = [];
        const values = [];

        if (newName) {
            fieldsToUpdate.push('name = ?');
            values.push(newName);
        }
        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            fieldsToUpdate.push('password = ?');
            values.push(hashedPassword);
        }
        values.push(userId);

        const updateQuery = `UPDATE Users SET ${fieldsToUpdate.join(', ')} WHERE userId = ?`;

        console.log('Executing update query:', updateQuery, values);

        await db.query(updateQuery, values);
        res.status(200).json({ status: 'success', message: 'Account details updated successfully' });
    } catch (err) {
        console.error('Error updating account details:', err); // Log the error
        res.status(500).json({ status: 'fail', message: 'Failed to update account details' });
    }
};
