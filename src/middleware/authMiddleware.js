// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken'); // Caso esteja usando JWT
require('dotenv').config(); // Para acessar o token no .env

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY); // Verifica e decodifica o token
    req.user = decoded; // Armazena as informações do usuário autenticado no request
    next(); // Continua para a próxima função/middleware
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
