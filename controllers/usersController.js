const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UsersController {
    static register (req, res) {
        let {name, email, password} = req.body
        User.create({
            name,
            email,
            password
        })
            .then(data => {
                res.status(201).json({
                    User: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static login (req, res) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                if(data) {
                    let compare = comparePassword(password, data.password)
                    if(compare) {
                        let token = generateToken({
                            id: data.id,
                            email: data.email
                        })
                        res.status(201).json({
                            token
                        })        
                    } else {
                        res.status(401).json({
                            msg: 'Please input correct password'
                        })    
                    }
                } else {
                    res.status(401).json({
                        msg: 'Please input registered email'
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

module.exports = UsersController