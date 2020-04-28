const { User } = require('../models');
const { compareHash } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
    static register(req, res, next) {
        const { name, username, email, password } = req.body;
        console.log(req.body);

        User
            .create({
                name,
                username,
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
}

module.exports = UserController;
