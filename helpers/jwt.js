const jwt = require('jsonwebtoken')

function get_token(payload) {
    let token = jwt.sign(payload, process.env.SECRET);
    return token
}

module.exports = get_token