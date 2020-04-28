"use strict"

const Model = require("../models/index.js");
const {checkPassword} = require("../helpers/bcrypt.js");
const {generateToken} = require("../helpers/jwt.js");

const User = Model.User;

class ControllerUser{
    static signup(req, res){
        let {email, password} = req.body;

        User.create({
            email,
            password
        })
        .then(data => {
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch(err => {
            next(err);
            // res.status(500).json({
            //     errors: err
            // })
        })
    }
    static signin(req, res){
        let {email, password} = req.body;

        User.findOne({
            where: {
                email
            }
        })
        .then(result => {
            if(result){
                let compare = checkPassword(password, result.password);

                if(compare){
                    let token = generateToken({
                        id: result.id,
                        email: result.email
                    })

                    res.status(200).json({
                        token
                    })
                }
                else{
                    throw{
                        msg: "email/password unavailable",
                        code: 401
                    }
                }
            }
            else{
                throw{
                    msg: "email/password unavailable",
                    code: 401
                }
            }
        })
        .catch(err => {
            next(err);
        })
    }
}
module.exports = ControllerUser;