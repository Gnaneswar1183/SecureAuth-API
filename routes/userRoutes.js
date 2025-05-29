const express = require('express');
const { body } = require('express-validator');
const { authenticate, requireAdmin, requireVerified } = require('../middlewares/authMiddleware');
const {
  getCurrentUser,
  updateProfile,
  changePassword,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// User routes
router.get('/me', authenticate, getCurrentUser);
router.put(
  '/me',
  authenticate,
  requireVerified,
  [
    body('firstName').optional().trim().notEmpty(),
    body('lastName').optional().trim().notEmpty(),
    body('email').optional().isEmail().normalizeEmail(),
  ],
  updateProfile
);
router.put(
  '/me/password',
  authenticate,
  requireVerified,
  [body('currentPassword').notEmpty(), body('newPassword').isLength({ min: 8 })],
  changePassword
);

// Admin routes
router.get('/', authenticate, requireAdmin, getAllUsers);
router.get('/:userId', authenticate, requireAdmin, getUserById);
router.put('/:userId', authenticate, requireAdmin, updateUser);
router.delete('/:userId', authenticate, requireAdmin, deleteUser);

module.exports = router; 