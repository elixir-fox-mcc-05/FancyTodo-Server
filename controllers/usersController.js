const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UsersController {
    static register (req, res, next) {
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
                next(err)
            })
    }

    static login (req, res, next) {
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
                        throw {
                            msg: 'Please input correct password',
                            code: 401
                        }    
                    }
                } else {
                    throw {
                        msg: 'Please input registered email',
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UsersController