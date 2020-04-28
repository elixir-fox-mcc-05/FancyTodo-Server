let { Todo, User } = require('../models/index')
let compare = require('../helpers/bycrypt').compare
let jwtToken = require('../helpers/jwt')
class ControllerUser {
    static register (req, res) {
        let data = {
            email: req.body.email,
            password: req.body.password,
        }
        User.create(data)
        .then(data => {
            res.status(200).json({
                Todo : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
    }

    static login (req, res) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({where : {email : email}})
            .then((user) => {
                if (!user) {
                    res.status(401).json({
                        msg : 'wrong email / password'
                    })
                } else if (!compare(password, user.password)) {
                    res.status(401).json({
                        msg : 'wrong email / password'
                    })
                } else  {
                    let token = jwtToken ({
                        email,
                        password
                    })
                    res.status(200).json({
                        token
                    })
                }
            })
    }
    
}
module.exports = ControllerUser