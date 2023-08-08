const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config'); // Create this file to store your secret key

// Middleware to authenticate incoming requests
const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    // Attach the authenticated user to the request object for later use
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};

