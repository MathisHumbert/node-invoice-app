const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  console.log(authHeaders);
  if (!authHeaders || !authHeaders.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Invalid');
  }

  const token = authHeaders.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};

module.exports = auth;
