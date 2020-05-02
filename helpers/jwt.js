const jwt = require('jsonwebtoken')

function get_token(payload) {
    return jwt.sign(payload, process.env.SECRET);
}

function verify(token)  {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {get_token, verify}