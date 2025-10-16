const express = require('express');
const router = express.Router();
const {
  bookmarkPost,
  likePost,
  addComment,
  getBookmarks,
  getLikes,
  getComments,
} = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');

// Public routes
router.get('/comments/:postId', getComments);

// Protected routes
router.use(protect);
router.post('/bookmark/:postId', bookmarkPost);
router.post('/like/:postId', likePost);
router.post('/comment/:postId', addComment);
router.get('/bookmarks', getBookmarks);
router.get('/likes', getLikes);

module.exports = router;