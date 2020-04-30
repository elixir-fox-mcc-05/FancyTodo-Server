let jwt = require('jsonwebtoken');
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
}

module.exports = UserCon;