const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/token')

class userController{
    static signup(req, res){
        let { email, password } = req.body
        User.create({
            email,
            password
        })
            .then(data => {
                let { id, email, password } = data
                res.status(201).json({
                    id,
                    email,
                    password
                })
            })
            .catch(err => {
                res.status(400).json({
                    error: err
                });
            })
    }

    static signin(req, res){
        let { email, password } = req.body
        User.findOne({
            where: {email}
        })
            .then(data => {
                if(data){
                    let compare = comparePassword(password, data.password)
                    if(compare){
                        let { id, email, password } = data 
                        let token = generateToken({
                            id,
                            email,
                            password
                        })
                        res.status(200).json({
                            token
                        })
                    } else {
                        res.status(400).json({
                            error: `password not match`
                        })
                    }
                } else {
                    res.status(400).json({
                        error: `Invalid email or password`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }
}

module.exports = userController