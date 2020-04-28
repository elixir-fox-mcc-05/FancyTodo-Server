const bcrypt = require('bcryptjs')

function generateHash(password) {
    let salt = bcrypt.genSaltSync(12)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    generateHash,
    verifyPassword
}