"use strict"

const { Todo } = require('../models')

function authorization(req, res, next) {
    const { id } = req.params;

    Todo.findByPk(id)
        .then(todo => {
            if (todo) {
                if (todo.UserId == +req.UserId) {
                    next()
                } else {
                    res.status(401).json({
                        msg: `You are not authorized to do this`
                    })
                }
            } else {
                res.status(400).json({
                    msg: `Cannot find todo with id ${id}`
                })
            }
        })
}

module.exports = authorization;