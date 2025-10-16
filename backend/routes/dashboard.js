const express = require('express');
const router = express.Router();
const {
  getProjects,
  getInvoice,
  getChatMessages,
  sendMessage,
  getAISuggestions,
} = require('../controllers/dashboardController');
const { protect } = require('../middlewares/authMiddleware');

// All routes are protected
router.use(protect);

// Project routes
router.get('/projects', getProjects);

// Invoice routes
router.get('/invoice/:projectId', getInvoice);

// Chat routes
router.get('/chat', getChatMessages);
router.post('/chat', sendMessage);

// AI Suggestions
router.get('/suggestions', getAISuggestions);

module.exports = router;