const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/token')
const verificationGoogle = require('../helpers/googleOauth')

class userController{
    static signup(req, res, next){
        let { email, password } = req.body
        User.create({
            email,
            password
        })
            .then(data => {
                let { id, email, password } = data
                res.status(201).json({
                    id,
                    email,
                    password
                })
            })
            .catch(err => {         
                next(err)
                
            })
    }

    static signin(req, res, next){
        let { email, password } = req.body
        User.findOne({
            where: {email}
        })
            .then(data => {
                if(data){
                    let compare = comparePassword(password, data.password)
                    if(compare){
                        let { id, email, password } = data 
                        let token = generateToken({
                            id,
                            email,
                            password
                        })
                        res.status(200).json({
                            token
                        })
                    } else {
                        throw{
                            msg: `password not match`,
                            code: 400
                        }
                    }
                } else {
                    throw{
                        msg: 'invelid email or password',
                        code: 400
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleSignin(req, res, next){
        let google_token = req.headers.google_token
        let email = null
        let newUser= false

        verificationGoogle(google_token)
            .then(payload => {
                email = payload.email
                return User.findOne({where: {email}})
            })
            .then(user => {
                if(user){
                    return user
                } else {
                    newUser = true
                    return User.create({
                        email,
                        password: process.env.DEFAULT_GOOGLE_PASS
                    })
                }
            })
            .then(user => {
                let code = newUser ? 201 : 200
                let { id, email, password } = user
                let token = generateToken({
                    id,
                    email,
                    password
                })

                res.status(code).json({
                    token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = userController