-- Create Users Table
CREATE TABLE Users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create To-Do Items Table
CREATE TABLE TodoItems (
    todoId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    dueDate DATETIME,
    importance INT,
    urgency INT,
    status VARCHAR(50) DEFAULT 'pending',
    isDeleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(userId)
);

-- Create Transaction Log Table
CREATE TABLE TransactionLogs (
    logId INT AUTO_INCREMENT PRIMARY KEY,
    todoId INT,
    operation VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    changes JSON,
    FOREIGN KEY (todoId) REFERENCES TodoItems(todoId)
);

-- Insert example data into Users Table
INSERT INTO Users (username, password, email, name)
VALUES ('user123', 'password123', 'user@example.com', 'John Doe');

-- Insert example data into To-Do Items Table
INSERT INTO TodoItems (userId, title, description, dueDate, importance, urgency, status)
VALUES (1, 'New Task', 'Task description', '2025-01-01 12:00:00', 3, 2, 'pending');

-- Insert example data into Transaction Logs Table
INSERT INTO TransactionLogs (todoId, operation, changes)
VALUES (1, 'create', '{"title": "New Task", "description": "Task description", "dueDate": "2025-01-01 12:00:00", "importance": 3, "urgency": 2}');
