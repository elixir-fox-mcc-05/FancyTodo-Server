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
                    res.status(401).json({
                        msg: "unauthorized user"
                    })
                }
            } else {
                res.status(404).json({
                    msg: `task with id ${id} is not found`
                })
            }
        })
    }
}