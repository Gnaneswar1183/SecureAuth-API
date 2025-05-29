const express = require('express');
const { body } = require('express-validator');
const { authenticate } = require('../middlewares/authMiddleware');
const {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
  refreshToken,
} = require('../controllers/authController');

const router = express.Router();

// Validation middleware
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty(),
];

// Routes
router.post('/register', registerValidation, register);
router.post('/verify-email', verifyEmail);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/refresh-token', refreshToken);

module.exports = router; 