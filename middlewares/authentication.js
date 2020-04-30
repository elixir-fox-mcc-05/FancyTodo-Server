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
                    next ({
                        msg : "Please Login First",
                        code : 401,
                        type : "Unauthorized"
                    })
                }
            })

    } catch (err) {
        next({
            msg : "Something Went Wrong",
            code : 500,
            type : "Internal Server Error"
        })
    }
}

module.exports = authentication