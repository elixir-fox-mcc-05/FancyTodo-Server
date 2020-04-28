'use strict'

const { User } = require(`../models`)
const bcrypt = require(`../helpers/bcrypt`)
const jwt = require(`../helpers/jwt`)

class UserController {

    static create ( req, res) {
        const { nickname, email, password } = req.body
        let newUser = {
            nickname,
            email,
            password
        }
        
        User.create(newUser)
            .then(result => {
                res.status(201).json({
                    User : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static getUsers( req, res) {
        User.findAll({})
            .then(result => {
                res.status(200).json({
                    Users : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static deleteUser ( req, res) {
        User.destroy({
            where : {
                id : Number(req.params.id)
            }
        })
        .then(result => {

            if(result){
                res.status(200).json({
                    Users : result
                })
            } else {
                throw res.status(400).json({
                    Error :{
                        message : `ID not found`
                    } 
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                Error : err.message
            })
        })
    }

    static login ( req, res) {
        const { email, password} = req.body
        User.findOne({
            where : {
                email : email
            }
            })

            .then(result => {
                if(result){
                    if(bcrypt.compare(password, result.password)){
                        let newToken = {
                            UserId : result.id
                        }
                        res.status(200).json({
                            token : jwt.generateToken(newToken)
                        })
                    } else {
                        throw res.status(401).json({
                            Error : {
                                message : `Email & password combination is invalid`
                            }
                        })
                    }
                } else {
                    throw res.status(401).json({
                        Error : {
                            message : `Unregistered email`
                        }
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }


}

module.exports = UserController