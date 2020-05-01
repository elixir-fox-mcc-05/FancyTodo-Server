const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {
    static register(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(payload)
            .then((result) => {
                console.log('berhasil buat')
                let newUser = {
                    id: result.id,
                    email: result.email
                }
                let access_token = generateToken(newUser)
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
                    access_token: access_token
                })
            }).catch((err) => {
                next(err)
                console.log(err);
            });
    }

    static login(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
                where: {
                    email: payload.email
                }
            })
            .then((data) => {
                console.log('dapet data')
                if (data) {
                    let decrypted = comparePassword(payload.password, data.password)
                    if (decrypted) {
                        let userdata = {
                            id: data.id,
                            email: data.email
                        }
                        console.log('berhasi login')
                        let access_token = generateToken(userdata)
                        return res.status(200).json({
                            id: data.id,
                            email: data.email,
                            access_token
                        })
                    } else {
                        next({
                            name: 'BadRequest',
                            errors: [{ msg: 'Invalid Email/Password' }]
                        })
                    }
                } else {
                    next({
                        name: 'BadRequest',
                        errors: [{ msg: 'Invalid Email/Password' }]
                    })
                }
            })
            .catch((err) => {
                next({
                    name: 'InternalServerError',
                    errors: [{ message: err }]
                })
            })
    }

    static googleSign(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''
        console.log(req.body.id_token)
        client.verifyIdToken({
                idToken: req.body.id_token,
                audience: process.env.CLIENT_ID
            })
            .then(ticket => {
                console.log(ticket)
                email = ticket.getPayload().email
                return User.findOne({
                    where: {
                        email: email
                    }
                })
            })
            .then(data => {
                if (data) {
                    let user = {
                        id: data.id,
                        email: data.email
                    }
                    let token = generateToken(user)
                    return res.status(200).json({
                        id: user.id,
                        email: user.email,
                        access_token: token
                    })
                } else {
                    return User.create({
                        email: email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                }
            })
            .then(data => {
                let user = {
                    id: data.id,
                    email: data.email
                }
                let token = generateToken(user)
                return res.status(201).json({
                    id: user.id,
                    email: user.email,
                    access_token: token
                })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController