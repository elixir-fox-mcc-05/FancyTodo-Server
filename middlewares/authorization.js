const { Todo } = require('../models')

const authorization = (req, res, next) => {
    const { id } = req.params;

    Todo.findByPk(id)
        .then(result => {
            if (result) {
                if (result.UserId === req.currentUserId) next()
                else {
                    res.status(401).json({
                        msg: "User is unauthorized to modify this Todo"
                    })
                }
            } else {
                res.status(404).json({
                    err: '@ Authorization',
                    msg: `Todo with id ${id} is not available`
                })
            }
        })
}

module.exports = authorization