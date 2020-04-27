const { User } = require('../models');
const { compareHash } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
    static register(req, res) {
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
                User: newUser
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
    }

    static login(req, res) {
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
                    res.status(401).json({
                        msg: "wrong password"
                    })
                }
            } else {
                res.status(401).json({
                    msg: "wrong email"
                })
            }
        })
        .then(err => {
            res.status(500).json({
                error: err.message
            })
        })
    }
}

module.exports = UserController;
