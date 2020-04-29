const { User } = require("../models")
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(payload)
            .then((result) => {
                console.log('berhasil buat')
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
                    password: result.password
                })
            }).catch((err) => {
                console.log(err)
                next({
                    name: 'InternalServerError',
                    errors: err 
                })
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
            let decrypted = comparePass(payload.password, data.password)
                if (decrypted) {
                    let userdata = {
                        id: data.id,
                        email: data.email
                    }
                    console.log('berhasi login')
                    let access_token = generateToken(userdata)
                    return res.status(200).json({
                        access_token: access_token
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
           

}

module.exports = UserController