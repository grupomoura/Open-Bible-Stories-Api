// src/logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Formato personalizado do log
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    // Salvar logs em arquivo
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

// Caso você queira ver os logs também no console
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

module.exports = logger;
