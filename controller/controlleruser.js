const {User} = require('../models')
const {compare} = require('../helpers/generatepassword')
const {generateToken} = require('../helpers/jwt')

class userController {
    static register(req, res){
        const {email, password} = req.body
        const values = {
            email,
            password
        }
        User
            .create(values)
            .then(result => {
                res.status(201).json({
                    User : result
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req, res){
        const {email, password} = req.body
        console.log(req.body)
        User
            .findOne({
                where : {
                    email,
                }
            })
            .then(result => {
                if(compare(password, result.password)){
                    let token = generateToken({
                        id : result.id,
                        email : result.email
                    })
                    res.status(200).json({
                        Token : token
                    })
                } else {
                    throw ({
                        msg : "wrong email/password",
                        code : 404
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = userController