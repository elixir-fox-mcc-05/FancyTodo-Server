const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Helper {
    static passwordHash(password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }
    static passwordCompare(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
    static generateToken(payload) {
        return jwt.sign(payload, process.env.KEY)
    }
    static verify(token) {
        return jwt.verify(token, process.env.KEY)
    }

}

module.exports = Helper