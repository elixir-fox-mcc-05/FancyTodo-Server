const jwt = require('jsonwebtoken');

function generateToken(payload){ //payload = object yg berisi id dan email user
    let token = jwt.sign(payload, process.env.SECRET); //(before: secret bebas, jangan hardcode)(after:gunakan process.env.SECRET dengang SECRET ada di .env)
    return token;
}

function verifyToken(token){
    return jwt.verify(token, process.env.SECRET);// sama dengan atas
}

module.exports = { 
    generateToken,
    verifyToken
};