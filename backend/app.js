// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const quizRoutes = require('./routes/quizRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');  // Admin leaderboard route
const userRoutes = require('./routes/userRoutes');
const ecoActivityRoutes = require('./routes/ecoActivityRoutes');

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Middleware to parse JSON in request bodies

// Routes
app.use('/api/auth', authRoutes);  // Authentication related routes
app.use('/api/admin', adminRoutes);  // Admin routes
app.use('/api/quiz', quizRoutes);  // Quiz routes
app.use('/api/admin', leaderboardRoutes);  // Admin leaderboard route
app.use('/api/user', userRoutes);  // User-specific routes
app.use('/api/user', ecoActivityRoutes);  // Eco activities related routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Error connecting to database:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
