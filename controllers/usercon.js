let jwt = require('jsonwebtoken');
let googleAuth = require('../helpers/googleAuth.js')
let { User } = require('../models')
let { comparePassword } = require('../helpers/bcrypt.js')
let { generateToken } = require('../helpers/jwt.js')

class UserCon {
    static signup (req,res) {
        let { email , password , confirm_password } = req.body

        if(password!==confirm_password) {
            res.status(400).json({
                error : 'please input confirm password same as password'
            })
        } else {
            User.create({
                email : req.body.email,
                password : req.body.password
            })
            .then(data =>{
                res.status(201).json({
                    data
                })
            })
            .catch(err=> {
                res.status(400).json({
                    error : err.errors[0].message
                })
            })
        }
    }

    static signin (req,res) {
        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(result => {
            if (result) {
                let checkPass = comparePassword(req.body.password,result.password)
                if(checkPass) {
                    let obj = {
                        id : result.id,
                        email : result.email
                    }
                    let token = generateToken(obj)
                    res.status(201).json({
                        token
                    })
                } else {
                    res.status(401).json({
                        error : 'wrong email/password'
                    })
                }
            } else {
                res.status(401).json({
                    error : 'wrong email/password'
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static googleSignin (req,res) {
        let newUser = false;
        let email = '';
        googleAuth(req.body.google_token)
        .then(data=>{
            email = data;
            return User.findOne({
                where : {
                    email
                }
            })
        })
        .then(data=>{
            if(data) {
                return data
            } else {
                newUser = true
                return User.create({
                    email,
                    password : process.env.DEFAULT_PASSWORD
                })
            }
        })
        .then(user=>{
            let code = newUser ? 201 : 200;
            let obj = {
                id : user.id,
                email : user.email
            }
            let token = generateToken(obj)
            res.status(code).json({
                token
            })
        })
        .catch(err=>{
            res.status(500).json({
                error : ' cannot login with google account ! internal server error '
            })
        })
    }
}

module.exports = UserCon;