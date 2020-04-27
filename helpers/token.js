const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, 'sssttt')
}

module.exports = {generateToken}