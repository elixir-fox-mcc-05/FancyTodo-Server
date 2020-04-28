var jwt = require('jsonwebtoken');


function generateToken(obj) {
    return jwt.sign(obj, 'fancydandysparky');
}

function translateToken(token) {
    return jwt.verify(token, 'fancydandysparky')
}

module.exports = {
    generateToken,
    translateToken
}