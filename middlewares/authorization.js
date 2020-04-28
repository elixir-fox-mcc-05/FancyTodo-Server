const { Todo } = require('../models')

function authorization (req, res, next) {
    let { id } = req.params
    Todo.findByPk(id)
        .then(data => {
            if(data) {
                if(data.UserId == req.currentUserId) {
                    next()
                } else {
                    res.status(401).json({
                        msg: 'unauthorized'
                    })
                }
            } else {
                res.status(404).json({
                    msg: 'todo not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                msg: 'internal server error'
            })
        })
}

module.exports = authorization