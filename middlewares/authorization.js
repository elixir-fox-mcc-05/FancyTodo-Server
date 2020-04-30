const {Todo} = require('../models')

function authorization(req, res, next) {
    let { id } = req.params
    Todo
        .findByPk(id)
        .then(result => {
            if(result){
                if(result.UserId === req.currentUser){
                    next()
                } else {
                    next ({
                        msg : "You are not authorized to do this",
                        type : "Not Authorize",
                        code : 401
                    })
                }
            } else {
                throw ({
                    msg : "You are not authorized to do this",
                    code : 401,
                    type : "Not Authorize"
                })
            }
        })
        .catch(err => {
            next({
                msg : "Something Went Wrong",
                code : 500,
                type : "Internal Server Error"
            })
        })
}

module.exports = authorization