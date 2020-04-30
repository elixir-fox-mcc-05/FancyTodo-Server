const {User} = require('../models')
const {compare} = require('../helpers/generatepassword')
const {generateToken} = require('../helpers/jwt')
const verificationToken = require('../helpers/googleOauthApi')

class userController {
    static register(req, res, next){
        const {email, password, confirmPassword} = req.body
        const values = {
            email,
            password
        }
        if (password !== confirmPassword){
            return next({
                code : 400,
                type : "Bad Request",
                msg : "Password doesnt match"
            })
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
                    return next ({
                        code : "501",
                        msg : "user already exist",
                        type : "Not Implemented"
                    })
                }
            })
            .catch(err => {
                if (err.name){
                    return next(err)
                } else {
                    return next({
                        code : 500,
                        msg : "something went wrong",
                        type : "internal Server Error"
                    })
                }
            })
    }
    static login(req, res, next){
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
                    res.status(202).json({
                        Token : token
                    })
                } else {
                    return next ({
                        code : 404,
                        msg : "wrong email/password",
                        type : "Not Found"
                    })
                }
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "internal Server Error"
                })
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
                    newUser = true
                    return User
                        .create({
                            email,
                            password : process.env.Default_user_password
                        })
                }
            })
            .then(user => {
                let code = newUser ? 202 : 201
                let token = generateToken({
                    id : user.id,
                    email : user.email
                })
                res.status(code).json({
                    Token : token
                })
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
    }
    static facebookLogin(req, res, next){ 
        const {email} = req.headers
        // let email = null
        let newUser = false
        console.log(email)
        User.findOne({
                where : {
                    email
                }
            })
            .then(user => {
                if(user){
                    return user
                } else {
                    newUser = true
                    return User
                        .create({
                            email,
                            password : process.env.Default_user_password
                        })
                }
            })
            .then(user => {
                let code = newUser ? 202 : 201
                let token = generateToken({
                    id : user.id,
                    email : user.email
                })
                res.status(code).json({
                    Token : token
                })
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
    }
}

module.exports = userController