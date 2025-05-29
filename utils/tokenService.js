const jwt = require('jsonwebtoken');

exports.generateToken = (userId, type = 'access') => {
  const secret = process.env.JWT_SECRET;
  const expiration = type === 'access' 
    ? process.env.JWT_ACCESS_EXPIRATION 
    : process.env.JWT_REFRESH_EXPIRATION;

  return jwt.sign({ userId }, secret, { expiresIn: expiration });
};

exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, expired: false, userId: decoded.userId };
  } catch (error) {
    return {
      valid: false,
      expired: error.name === 'TokenExpiredError',
      userId: null
    };
  }
}; 