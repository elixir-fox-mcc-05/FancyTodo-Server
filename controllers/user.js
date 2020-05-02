let { Todo, User, UserProject, Project} = require('../models/index')
let compare = require('../helpers/bycrypt').compare
let { jwtToken } = require('../helpers/jwt')
let googleVerification = require('../helpers/googleSignAPI')

class ControllerUser {
    static register (req, res) {
        let data = {
            email: req.body.email,
            password: req.body.password,
        }
        User.create(data)
        .then(data => {
            res.status(200).json({
                Todo : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
    }

    static login (req, res, next) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({where : {email : email}})
        
            .then((user) => {
                if (!user) {
                    throw {
                        msg : 'wrong email / password',
                        code : 401
                    }
                } else if (!compare(password, user.password)) {
                    throw {
                        msg : 'wrong email / password',
                        code : 401
                    }
                } else  {
                    let access_token = jwtToken ({
                        id:user.id,
                        email
                    })
                    
                    res.status(200).json({
                        access_token 
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static googleLogin (req, res, next) {
        let google_token = req.headers.google_token
        let email
        googleVerification(google_token)
        .then(data => {
            email = data.email
            return User.findOne({where : {email : email}})
        })
        .then(user => {
            if(user) {
                return user
            } else if(!user){
                return User.create({
                    email: email,
                    password: process.env.DEFAULT_GOOGLE_PASSWORD
                })
            }
        })
        .then(result => {
            let access_token = jwtToken ({
                id: result.id,
                email: result.email
            })
            
            res.status(200).json({
                access_token 
            })
        })
        .catch(err => {
            next(err)
        })
        
    }
    static show (req, res) {
        User.findAll({
            where: {
                status : true
            }
        })
        .then(data => {
            // console.log(data);
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }
    static change (req, res, next) {
        let data = {
            status: req.body.status
        }
        User.update(data,
        {
            where : {
                id : req.params.id
            },
            returning: true
        })
        .then((result) => {
            result = result[1][0]
            if (result) {
                res.status(200).json({
                    result
                })
            }
            else {
                throw {
                    msg : 'id Not Found',
                    code: 404
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }
    
}
module.exports = ControllerUser