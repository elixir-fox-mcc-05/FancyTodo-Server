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
                if(result){
                    req.currentUser = id
                    next()
                } else {
                    throw ({
                        msg : "Please Login First",
                        code : 401
                    })
                }
            })

    } catch (err) {
        next(err)
    }
}

module.exports = authentication