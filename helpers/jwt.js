const jwt = require('jsonwebtoken');

function userToken(payload) {
  return jwt.sign(payload, 'restapitodo');
}

module.exports = userToken;