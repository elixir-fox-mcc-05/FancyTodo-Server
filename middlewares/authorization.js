const { Todo } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        Todo
            .findByPk(id)
            .then(result => {
                if(result) {
                    if(result.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            msg: "Unauthorized User",
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: `no task with id ${id} found`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}