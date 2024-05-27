const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const auth = require('./middleware/auth'); // Ensure middleware is correctly imported

const app = express();

app.use(bodyParser.json());

// Apply routes
app.use('/api/user', userRoutes); // Adjust the base path for user routes
app.use('/api/todo', todoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
