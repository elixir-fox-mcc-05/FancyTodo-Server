const { Todo } = require('../models')

function authorization(req, res, next) {
    const { id } = req.params
    const { UserId } = req

    Todo.findByPk(id)
        .then(data => {
            if (data.UserId == UserId) {
                next()
            } else {
                res
                  .status(404)
                  .json({ msg: 'NOT FOUND' })
            }
        })
}

module.exports = authorization