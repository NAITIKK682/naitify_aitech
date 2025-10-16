const dotenv = require('dotenv');

// Load environment variables at the very top
dotenv.config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const connectDB = require('./config/db');

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow frontend URL
  credentials: true
}));

// Enable compression for production
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api', require('./routes/welcome'));

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Error handling middleware
app.use(require('./middlewares/errorHandler'));

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle port conflicts
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is busy, trying port ${PORT + 1}...`);
    server.listen(PORT + 1, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT + 1}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
