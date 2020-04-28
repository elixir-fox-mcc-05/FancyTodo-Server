'use strict'

const Model = require('../models');
const User = Model.User;
const {compare} = require('../helpers/bcrypt.js')
const {userToken} = require('../helpers/jwt.js')

class UserController {

    static register(req, res) {
        let {username, email, password} = req.body;
        User.create({
            username,
            email,
            password
        })
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(400).json({error: err.message});
            });
    }

    static login(req, res, next) {
        let {email, password} = req.body;
        User.findOne({
            where: {
                email : email
            }
        })
            .then(result => {
                if (result) {
                    let check = compare(password, result.password);
                    if (check) {
                        let token = userToken({
                            id : result.id,
                            email : result.email
                        })
                        res.status(200).json({token})
                    }
                    else {
                        res.status(401).json({error: err.message});
                    }
                }
                else {
                    res.status(401).json({error: err.message})
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })
    }

}

module.exports = UserController;