const { User } = require('../models');
const { compareHash } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');
const { verifyIdToken } = require('../helpers/googleOauthVerification.js');

class UserController {
    static register(req, res, next) {
        const { name, email, password } = req.body;
        console.log(req.body);

        User
            .create({
                name,
                email,
                password
            })
            .then(newUser => {
                res.status(201).json({
                    id: newUser.id,
                    email: newUser.email
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body;

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(result => {
                if(result) {
                    let compare = compareHash(password, result.password);
                    if(compare) {
                        let accessToken = generateToken({
                            id: result.id,
                            email: result.email
                        });
                        res.status(200).json({
                            accessToken
                        })
                    } else {
                        throw {
                            msg: "wrong password",
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: "email not registered",
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }

    static googleLogin(req, res, next) {
        let email;
        let name;
        let newUser = false;
        const token = req.headers.google_token;
        verifyIdToken(token)
            .then(payload => {
                email = payload.email;
                name = `${payload.given_name} ${payload.family_name}`
                return User
                    .findOne({
                        where: {
                            email
                        }
                    })
            })
            .then(user => {
                if(user) {
                    return user;
                } else {
                    newUser = true;
                    return User
                        .create({
                            name,
                            email,
                            password: process.env.GOOGLE_PASSWORD_DEFAULT
                        })
                }
            })
            .then(newUser => {
                let code = newUser ? 201 : 200;
                const accessToken = generateToken({
                    id: newUser.id,
                    email: newUser.email
                });
                res.status(code).json({
                    accessToken
                })
            })
            .catch(err => {
                next(err);
            })

    }
}

module.exports = UserController;
