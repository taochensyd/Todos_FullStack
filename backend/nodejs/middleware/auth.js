const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your-jwt-secret';

module.exports = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ status: 'fail', message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Ensure req.user is set
        next();
    } catch (err) {
        res.status(401).json({ status: 'fail', message: 'Invalid or expired token' });
    }
};
