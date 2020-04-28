var jwt = require('jsonwebtoken');

function jwtToken (password) {
    return jwt.sign({ password }, process.env.SECRET);
}

module.exports = jwtToken