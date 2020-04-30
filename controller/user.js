const Model = require('../models')
const User = Model.User
const {CheckPassword} = require('../helpers/bcrypt.js')
const {generateToken} = require('../helpers/jwt.js')
const verifyGoogle = require('../helpers/googleOauthAPI.js')

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
        const { email , password } = req.body

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
                    res.status(200).json({ token, id : result.id, email : result.email })
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

    static googleLogin(req, res, next) {
        let googleToken = req.headers.id_token;
        // console.log(googleToken)
        let payload;
        verifyGoogle(googleToken)
            .then(data => {
                payload = data;
                return User.findOne({ where : { email : payload.email } })
            })
            .then(result => {
                if(result){
                    return result
                }else{
                    return User.create({ email : payload.email, password : process.env.SECRET })
                }
            })
            .then(user =>{
                let token = generateToken({
                    id: user.id,
                    email : user.email
                })
                res.status(200).json({ token })
            })
            
            .catch(err =>{
                console.log(err)
            })
    }


}


module.exports = UserController;