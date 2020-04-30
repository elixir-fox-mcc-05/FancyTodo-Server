const { User } = require('../models')
const {get_token} = require('../helpers/jwt')
const verification_google = require('../helpers/google-auth')

class UserController {
    static register(req, res, next) {
        let { email, password } = req.body
        User.create({ email, password })
            .then(data => {
                res
                  .status(201)
                  .json({ msg: 'successfully created', new_data: data })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({ where: { email, password } })
        .then(data => {
            if (data) {
                let token = (get_token(data.dataValues))
                    res
                      .status(200)
                      .json({ token })
                } else {
                    next(err)
                }
            })
            .catch(err => {-
                next(err)
            })
    }

    static google_signin(req, res, next) {
        const { google_token } = req.headers

        verification_google(google_token)
            .then(payload => {
                const { email } = payload
                let newUser = false

                return User.findOne({ where: { email } })
                    .then(dataUser => {
                        if(dataUser) {
                            const token = get_token(dataUser.dataValues)
                            
                            res
                              .status(200)
                              .json({ token })

                        } else {
                            newUser = true
                            return User.create({ email, password: process.env.DEFAULT_PASSWORD })
                                .then(new_user => {
                                    let code = newUser ? 201 : 200

                                    const token = get_token(new_user.dataValues)
                                    res
                                      .status(code)
                                      .json({ token })
                                    })
                                .catch(err => { next(err) })
                        }
                    })
                    .catch(err => { next(err) })
            })
            .catch(err => { next(err) })
    }
}

module.exports = UserController