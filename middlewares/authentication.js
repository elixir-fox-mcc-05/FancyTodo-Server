const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models')

function authentication(req, res, next){
    let token = req.headers.token
    try {
        let decoded = verifyToken(token)
        let {id} = decoded
        User
            .findByPk(id)
            .then(result=> {
                req.currentUser = id
                next()
            })

    } catch (err) {
        res.status(500).json({
            Message: "Please Login First"
        })
    }
}

module.exports = authentication