const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  submitContact,
  submitEnhancedContact,
  getContacts,
  getUserContactHistory,
  updateContactStatus
} = require('../controllers/contactController');
const { protect, authorize } = require('../middlewares/authMiddleware');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/contacts');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only images and documents are allowed'));
  }
});

// Public routes
router.route('/')
  .post(submitContact)
  .get(protect, authorize('admin'), getContacts);

// Enhanced contact form routes (protected)
router.route('/enhanced')
  .post(protect, upload.array('attachments', 5), submitEnhancedContact);

// User contact history
router.route('/history')
  .get(protect, getUserContactHistory);

// Contact status management (admin only)
router.route('/:id/status')
  .patch(protect, authorize('admin'), updateContactStatus);

module.exports = router;