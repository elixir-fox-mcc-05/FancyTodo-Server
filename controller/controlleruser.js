const {User} = require('../models')
const {compare} = require('../helpers/generatepassword')
const {generateToken} = require('../helpers/jwt')
const verificationToken = require('../helpers/googleOauthApi')

class userController {
    static register(req, res){
        const {email, password} = req.body
        const values = {
            email,
            password
        }
        User
            .create(values)
            .then(result => {
                if (result){
                    res.status(201).json({
                        UserId : result.id,
                        UserEmail : result.email
                    })
                } else {
                    throw ({
                        msg : "user allready exist",
                        code : "501"
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req, res){
        const {email, password} = req.body
        User
            .findOne({
                where : {
                    email,
                }
            })
            .then(result => {
                if(compare(password, result.password)){
                    let token = generateToken({
                        id : result.id,
                        email : result.email
                    })
                    res.status(200).json({
                        Token : token
                    })
                } else {
                    throw ({
                        msg : "wrong email/password",
                        code : 404
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static googleLogin(req, res, next){ 
        let google_token = req.headers.google_token
        let email = null
        let newUser = false
        verificationToken(google_token)
            .then(payload => {
                email = payload.email
                return User.findOne({
                    where : {
                        email
                    }
                })
            })
            .then(user => {
                if(user){
                    return user
                } else {
                    return User
                        .create({
                            email,
                            password : process.env.Default_user_password
                        })
                }
            })
            .then(user => {
                let code = newUser ? 200 : 200
                let token = generateToken({
                    id : user.id,
                    email : user.email
                })
                res.status(code).json({
                    Token : token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = userController