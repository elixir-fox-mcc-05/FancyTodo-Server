const Model = require("../models");
const User = Model.User;
const { checkPassword } = require("../helpers/bcrypt.js");
const { generateToken } = require("../helpers/jwt.js");
const googleVerification = require("../helpers/googleOauthAPI.js");

class UserController {

    static register (req, res, next) {

        let values = {
            email : req.body.email,
            password : req.body.password
        }

        User
            .create(values)
            .then(data => {
                res.status(201).json({
                    id : data.id,
                    email : data.email,
                    password : data.password
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login (req, res, next) {

        let values = {
            email : req.body.email,
            password : req.body.password
        }

        let options = {
            where : { 
                email : req.body.email 
            }
        }

        User
            .findOne(options)
            .then(data => {
                if (data) {
                    let compare = checkPassword(values.password, data.password);

                    if (compare) {
                        let token = generateToken({
                            id : data.id,
                            email : data.email
                        })

                        res.status(200).json({
                            token
                        })
                    } else {
                        throw {
                            code : 400,
                            type : "BAD REQUEST",
                            message : "Opps!, invalid email / password"
                        }
                    }

                } else {
                    throw {
                        code : 400,
                        type : "BAD REQUEST",
                        message : "Opps!, invalid email / password"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin (req, res, next) {

        let google_token = req.headers.google_token
        let email = null;
        let newUser = null;

        googleVerification(google_token)

            .then(dataPayload => {
                
                email = dataPayload.email;

                let options = {
                    where : { email }
                }
                return User.findOne(options)
            })
            .then(dataUser => {
                if (dataUser) {
                    return dataUser;
                } else {
                    newUser = true;
                    return User.create({
                        email : email,
                        password : process.env.DEFAULT_PASSWORD_GOOGLE_LOGIN
                    })
                }
            })
            .then(user => {
                let code = newUser ? 201 : 200;

                let token = generateToken({
                    id : user.id,
                    email : user.email
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

module.exports = UserController;