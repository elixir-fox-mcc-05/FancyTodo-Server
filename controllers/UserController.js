"use strict"

// const { User } = require('../models')

class UserController {
    static read(req, res) {
        res.json({
            msg: 'hi from User controller'
        })
    }

}

module.exports = UserController;