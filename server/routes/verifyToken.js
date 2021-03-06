const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ message: 'Access denied.' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({
      message:
        'Session Expired or invalid token, refresh the website or re-login if using the app on mobile.',
    });
  }
};
