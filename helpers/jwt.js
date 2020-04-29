let jwt = require('jsonwebtoken');


function generateToken ( payload ) {
    let token =  jwt.sign( payload , "secret" )
    return token;
}

function verifyToken (token) {
    let result = jwt.verify( token , "secret" )
    return result;
}


module.exports = {
    generateToken,
    verifyToken
}