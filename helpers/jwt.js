let jwt = require('jsonwebtoken');


function generateToken ( payload ) {
    let token =  jwt.sign( payload , process.env.SECRET )
    return token;
}

function verifyToken (token) {
    let result = jwt.verify( token , process.env.SECRET )
    return result;
}


module.exports = {
    generateToken,
    verifyToken
}