const jwt = require('jsonwebtoken')

function generateToken (payload) {
  let token = jwt.sign(payload, process.env.SECRET, {algorithm : 'RS256'})
  return token
}

module.exports = {
  generateToken
}