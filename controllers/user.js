const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next){
        const {email, password} = req.body
        let payload = {
            email, password
        }
        User.create(payload)
        .then(result => {
            let user = {
                id: result.id,
                email: result.email
            }
            let token = generateToken(user)
            return res.status(201).json({
                access_token : token, 
                msg: 'Successfully Registered'
            })
        })
        .catch(err => {
            return next(err)
        })

    }
    static login (req, res, next){
        const {email, password} = req.body
        let payload = {
            email, password
        }
        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then(result => {
            if(result){
                let compare = decryptPassword(payload.password, result.password)
                if(compare){
                    let user = {
                        id: result.id,
                        email: result.email
                    }
                    let token = generateToken(user)
                    return res.status(200).json({
                        access_token : token
                    })
                }
                else {
                    return res.status(400).json({
                        type : 'Bad Request',
                        msg : 'Invalid email/password'
                    })
                }
            }
            else {
                return res.status(400).json({
                    type : 'Bad Request',
                    msg : 'Invalid email/password'
                })
            }
        })
        .catch(err => {
            return next(err)
        })
    }
}

module.exports = UserController