const router = require('express').Router()
const { User } = require('../models')
const { verifyPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static signup(req, res) {
        const { email, password } = req.body
        
        User.create({
            email,
            password
        })
        .then(result => {
            res.status(201).json({
                User: {
                    id: result.id,
                    email: result.email
                }
            })
        })
        .catch(error => {
            res.status(500).json({
                msg: 'Error in signup',
                error: error.errors[0].message
            })
        })
    }

    static signin(req, res) {
        const { email, password } = req.body

        User.findOne({
            where: { email }
        })
        .then(result => {
            if(verifyPassword(password, result.password)) {
                let token = generateToken({
                    id: result.id,
                    email: result.email
                })
                res.status(200).json({ token })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(401).json({
                msg: "Wrong email or password"
            })
        })
    }
}

module.exports = UserController