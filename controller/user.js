const Model = require('../models')
const User = Model.User
const {CheckPassword} = require('../helpers/bcrypt.js')
const {generateToken} = require('../helpers/jwt.js')

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

    static signIn (req, res, next) {
        const {  username, email , password } = req.body

        User.findOne({
            where: {email}
        })
        .then(result => {
            if(result){
                let compare = CheckPassword( password, result.password )
                if(compare){
                        let token = generateToken({
                            id : result.id,
                            email: result.email
                        })
                    res.status(200).json({ token })
                }else {
                    throw {
                        msg : 'email or password wrong',
                        code : 401
                    }
                }
            }else{
                res.status(401).json({msg : 'email or password wrong'})
            }
        })
        .catch(err => {
            next(err)
        })
    }

}


module.exports = UserController;