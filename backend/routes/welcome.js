const express = require('express');
const router = express.Router();

// @desc    Get welcome message
// @route   GET /api/welcome
// @access  Public
router.get('/', (req, res) => {
  // Log request metadata
  console.log(`Request received: ${req.method} ${req.path}`);

  // Return JSON response
  res.status(200).json({
    message: 'Welcome to Naitify AI Tech!'
  });
});

// @desc    Get hello message
// @route   GET /api/hello
// @access  Public
router.get('/hello', (req, res) => {
  // Log request metadata
  console.log(`Request received: ${req.method} ${req.path}`);

  // Return JSON response
  res.status(200).json({
    message: 'Hello from Naitify AI Tech!'
  });
});

module.exports = router;
