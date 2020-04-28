const { User } = require('../models');
const { compare } = require('../helpers/bycrypt.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');

class UserController {
    static findAll(req, res, next) {
        const options = {
            orderBy: 'id'
        }
        User.findAll(options)
            .then(users => {
                res.status(200).json({ users });
            })
            .catch(err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err }]
                })
            })
    }

    static signup(req, res, next) {
        const { name, email, password } = req.body;
        const values = {
            name,
            email,
            password
        }
        User.create(values)
            .then(users => {
                res.status(201).json({ users });
            })
            .catch(err => {
                next(err);
            })
    }

    static signin(req, res, next) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    if (compare(password, user.password)) {
                        const token = generateToken({ id: user.id, name: user.name, email: user.email })
                        res.status(200).json({ token });
                    } else {
                        next({
                            name: 'Bad Request',
                            errors: [ { message: `email atau password salah `}]
                        })
                    }
                } else {
                    next({
                        name: 'Bad Request',
                        errors: [ { message: `email atau password salah `}]
                    })
                }
            })
            .catch(err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err }]
                })
            })
    }
}

module.exports = UserController;