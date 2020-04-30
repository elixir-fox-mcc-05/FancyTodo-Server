const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const googleVerification = require('../helpers/googleOauthApi')

class UsersController {
    static register (req, res, next) {
        let {name, email, password} = req.body
        User.create({
            name,
            email,
            password
        })
            .then(data => {
                res.status(201).json({
                    User: data,
                    notif: 'Register successful!'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login (req, res, next) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                if(data) {
                    let compare = comparePassword(password, data.password)
                    if(compare) {
                        let token = generateToken({
                            id: data.id,
                            email: data.email
                        })
                        res.status(201).json({
                            token,
                            notif: 'Welcome Back!'
                        })        
                    } else {
                        throw {
                            msg: 'Please input correct password',
                            code: 401
                        }    
                    }
                } else {
                    throw {
                        msg: 'Please input registered email',
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        let google_token = req.headers.google_token;
        let email = null;
        let newUser = false;

        googleVerification(google_token)
        .then(payload => {
            email = payload.email;
            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then(user => {
            if (user) {
                return user;
            } else {
                newUser = true;
                return User
                .create({
                    name: email,
                    email,
                    password: process.env.DEFAULT_GOOGLE_PASSWORD
                });
            }
        })
        .then(user => {
            let code = newUser ? 201 : 200;
            let token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(code).json({
                token,
                notif: 'Login Success!'
            })
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = UsersController