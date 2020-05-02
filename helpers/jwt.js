const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    let token = jwt.sign(payload, process.env.SECRET)
    return token
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}