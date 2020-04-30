const { Todo } = require('../models')

function authorization(req, res, next) {
    console.log('authorization');
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            // console.log(result);
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