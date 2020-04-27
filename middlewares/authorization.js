const { Todo } = require('../models')

function authorization(req, res, next) {
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            if (result) {
                if (result.UserId == req.currentUserId) return next()
                else return next({ name: 'Unauthorized' })
            } else {
                return next({
                    name: 'NotFound',
                    errors: [{ msg: 'Data Not Found' }]
                })
            }
        })
        .catch(next)
}

module.exports = authorization