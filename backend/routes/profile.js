const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile,
  deleteProfile
} = require('../controllers/profileController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/')
  .get(protect, getProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteProfile);

module.exports = router;
