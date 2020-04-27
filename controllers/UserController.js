"use strict"

const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {

    static read(req, res) {
        User.findAll({
            order: [['id', 'ASC']]
        })
            .then(users => {
                res.status(200).json({ users })
            })
            .catch(err => {
                res.status(500).json({
                    error: err.message
                })
            })
    }

    static register(req, res) {
        const { username, email, password } = req.body;

        User.create({
            username,
            email,
            password
        })
            .then(user => {
                res.status(201).json({
                    id: user.id,
                    username: user.username,
                    email: user.email
                })
            })
            .catch(err => {
                if (err.name == 'SequelizeValidationError') {
                    res.status(400).json({
                        error: err.message
                    })
                } else {
                    res.status(400).json({
                        error: err
                    })
                }
            })
    }

    static login(req, res) {
        const { email, password } = req.body;

        User.findOne({
            where: { email }
        })
            .then(user => {
                if (user) {
                    if (compare(password, user.password)) {
                        let token = generateToken({
                            id: user.id,
                            email: user.email
                        })
                        res.status(200).json({ token })
                    } else {
                        res.status(400).json({
                            msg: `Wrong email/password!`
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: `Wrong email/password!`
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    error: err.message
                })
            })
    }
}

module.exports = UserController;