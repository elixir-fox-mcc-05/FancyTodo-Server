const { User } = require("../models")
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

class UserController {
    static register(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(payload)
        User.create(payload)
            .then((result) => {
                console.log('berhasil buat')
                let newUser = {
                    id: result.id,
                    email: result.email,
                    password: result.password
                }
                let access_token = generateToken(newUser)
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
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
        console.log(payload)
        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then((data) => {
            console.log('dapet data')
            //console.log(data)
            if (data) {
            let decrypted = comparePass(payload.password, data.password)
            console.log(decrypted)
            let userdata = {
                id: data.id,
                email: data.email
            }
                if (decrypted) {
                    console.log('berhasi login')
                    let access_token = generateToken(userdata)
                    console.log(access_token)
                    console.log('return 200', access_token)
                    return res.status(200).json({
                        access_token: access_token
                        })
                        } else {
                            return next({
                                name: 'BadRequest',
                                errors: [{ msg: 'Invalid Email/Password' }]
                            })
                        }
            } else {
                return next({
                    name: 'BadRequest',
                    errors: [{ msg: 'Invalid Email/Password' }]
                })
            }
            })
            .catch((err) => {
                 return next({
                    name: 'InternalServerError',
                    errors: [{ message: err }]
                })
            })
        }
        
        static googleSign(req, res, next) {
            const client = new OAuth2Client(process.env.CLIENT_ID);
            let email = ''
            client.verifyIdToken({
                idToken: req.body.token,
                audience: process.env.CLIENT_ID
            })
            .then((ticket) => {
                email = ticket.getPayload().email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(data => {
                console.log(data)
                if(data) {
                    let payload = {
                        email: data.email,
                        id: data.id
                    }
                    let token = generateToken(payload)
                    res.status(200).json({
                        id: data.id,
                        email: data.email,
                        accessToken: token
                    })
                } else {
                    console.log(email)
                    return User.create({
                     email,
                     password: 'googlePass123'   
                    })
                }
            })
            .then((result) => {
                if (result) {
                    console.log(email)
                    const user = {
                        id: result.id,
                        email: result.email
                    }
                    const token = generateToken(user)
                    res.status(201).json({
                        id: user.id,
                        email: user.email,
                        accessToken: token
                    })
                }
            })
            .catch((err) => {
                next(err)
            });
          }

}

module.exports = UserController