let { User } = require('../models')

class UserCon {
    static signup (req,res) {
        let { email , password , confirm_password } = req.body

        if(password!==confirm_password) {
            res.status(401).json({
                error : 'please input confirm password same as password'
            })
        } else {
            User.create({
                email : req.body.email,
                password : req.body.password
            })
            .then(data =>{
                res.status(201).json({
                    data
                })
            })
            .catch(err=> {
                res.status(401).json({
                    error : err.errors[0].message
                })
            })
        }
    }
}

module.exports = UserCon;