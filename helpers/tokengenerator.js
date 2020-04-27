const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, process.env.secret)
}

module.exports = generateToken