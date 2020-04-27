"use strict"

// const { Todo } = require('../models')

class TodoController {
    static read(req, res) {
        res.json({
            msg: 'hi from todo controller'
        })
    }

}

module.exports = TodoController;