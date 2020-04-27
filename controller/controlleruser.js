const {User} = require('../models')
const {compare} = require('../helpers/generatepassword')
const generateToken = require('../helpers/tokengenerator')

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
                res.status(501).json({
                    Error : "Cannot Implemented"
                })
            })
    }
    static login(req, res){
        const {email, password} = req.body
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
                    res.status(404).json({
                        Error : "User Not Found"
                    })
                }
            })
            .catch(err => {
                res.status(404).json({
                    Error : "User doesnt exist"
                })
            })
    }
}

module.exports = userController