const { Todo } = require('../models/index.js');

function authorization(req, res, next) {
    let { id } = req.params //dari url
    Todo.findByPk(Number(id))
        .then(result => {
            if(result) {
                if(result.UserId == req.currentUserId){ //req.currentUserId dari authentication
                    next()
                }
                else {
                    return next ({
                        name: `Unauthorized`,
                        message: `Unauthorized. Please login first`
                    })
                }
            }
            else {
                return next({
                    name: 'NotFound',
                    message: `Todo with id ${id} NOT FOUND`
                })
            }
        })
}

module.exports = authorization;