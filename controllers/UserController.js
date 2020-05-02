const { User } = require('../models');
const { compare } = require('../helpers/bycrypt.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');
const googleVerification = require('../helpers/googleOauthApi.js');

class UserController {
    static findAll(req, res, next) {
        const options = {
            orderBy: 'id'
        }
        User.findAll(options)
            .then(user => {
                const userList = [];
                for (let i = 0; i < user.length; i++) {
                    const userData = {
                        id: user[i].id,
                        email:user[i].email
                    }
                    userList.push(userData);
                }
                res.status(200).json({ Users: userList })
            })
            .catch(err => {
                next(err);
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

    static googleLogin(req, res, next) {
        let email = null;
        let google_token = req.headers.google_token;
        let newUser = false;
        let name = null;
        googleVerification(google_token)
            .then(payload => {
                email = payload.email;
                name = payload.name;
                return User
                    .findOne({ where: { email } })
            })
            .then(user => {
                if (user) {
                    return user;
                } else {
                    newUser = true;
                    return User
                        .create({
                            name,
                            email,
                            password: process.env.DEFAULT_GOOGLE_PASSWORD
                        })
                }
            })
            .then(user => {
                let code = newUser ? 201 : 200;
                const token = generateToken({ id: user.id, name: user.name, email: user.email })
                res.status(code).json({
                    token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;