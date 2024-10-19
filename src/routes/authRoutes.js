const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Rota de login
router.post('/login', login);

// Rota de registro (sem autenticação)
router.post('/register', register);

module.exports = router;
