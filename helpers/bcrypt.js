const bcrypt = require('bcrypt')

const saltCount = 10
const salt = bcrypt.genSaltSync(saltCount)

const generatePass = (password) => {
    return bcrypt.hashSync(password, salt)
}

const comparePass = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = { generatePass, comparePass }