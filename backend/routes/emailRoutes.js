const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const auth = require('../middleware/auth');

// Email sending route
router.post('/send', auth, emailController.sendEmail);

// Email history route
router.get('/history/:userId', auth, emailController.getEmailHistory);

module.exports = router;
