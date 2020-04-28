const {Todo} = require('../models')

function authorization(req, res, next) {
    let { id } = req.params
    console.log(req.params)
    Todo
        .findByPk(id)
        .then(result => {
            if(result){
                if(result.UserId === req.currentUser){
                    next()
                } else {
                    throw ({
                        msg : "Not Found",
                        code : 404
                    })
                }
            } else {
                throw ({
                    msg : "Not Authorize",
                    code : 401
                })
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization