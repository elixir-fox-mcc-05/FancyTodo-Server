const Model = require('../models')
const User = Model.User
const {CheckPassword} = require('../helpers/bcrypt.js')

class UserController {
    static signUp (req, res) {
        const { username, email, password } = req.body

        User.create({username, email, password})
            .then(user => {
                res.status(201).json({ user })
            })
            .catch(err => {
                res.status(500).json({ error : err })
            })
    }

    static signIn (req, res) {
        const {  username, email , password } = req.body

        User.findOne({
            where: {email}
        })
        .then(result => {
            if(result){
                let compare = CheckPassword( password, result.password )
                if(compare){
                    res.status(200).json({ result })
                }else {
                    res.status(401).json({msg : 'email or password worng'})
                }
            }else{
                res.status(401).json({msg : 'email or password worng'})
            }
        })
        .catch(err => {
            res.status(500).json({error : err.message})
        })
    }

}

module.exports = UserController;