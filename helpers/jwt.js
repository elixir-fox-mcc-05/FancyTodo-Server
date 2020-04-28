const jwt = require('jsonwebtoken')

function get_token(payload) {
    return jwt.sign(payload, process.env.SECRET);
}

function verify(token)  {
    return jwt.verify(token, process.env.SECRET)
}

// console.log(
//     get_token({email: "irwam@gamil.com", password: "12345678"}),
//     verify(get_token({email: "irwam@gamil.com", password: "12345678"})),
//     verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpcndhbmxlYXJuQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5MCIsImNyZWF0ZWRBdCI6IjIwMjAtMDQtMjhUMDg6MzQ6NTQuNzE4WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDQtMjhUMDg6MzQ6NTQuNzE4WiIsImlhdCI6MTU4ODA2MjkyMH0.XTrsEYCvz1H3BJiNCnY3HJwBpoUa8_rNv3hvhYFfiOk')

// )

module.exports = {get_token, verify}