let { Todo, User } = require('../models/index')

function authorization (req, res, next) {
    console.log(req.params);
    Todo.findByPk(req.params.id)
    .then(result => {
        if(result) {
            if(result.UserId == req.currentUserId) {
                next()
            } else {
                res.status(401).json({
                    msg: 'unauthorized'
                })
            }
        } else {
            res.status(404).json({
                msg: 'not found'
            })
        }
    })
}

module.exports = authorization