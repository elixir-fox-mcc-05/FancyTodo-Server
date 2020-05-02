const { User } = require('../models/index.js');
const { checkPassword } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');
const googleVerification = require('../helpers/googleOauthApi.js');

class UserController {
    // router.post('/register', UserController.registerUser);
    static registerUser(req, res, next){
        let { email, password } = req.body;
        let input = {
            email,
            password
        }
        console.log(req.body)
        User.create(input)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                })
            })
            .catch(err => {
                next(err)
            })
    }

    // router.post('/login', UserController.loginUser);
    static loginUser(req, res, next){
        let { email, password } = req.body;
        let options = {
            where: {
                email
            }
        }
        User.findOne(options)
            .then (result => {
                if(result){
                    let compare = checkPassword(password, result.password);
                    if (compare){
                        let token = generateToken({
                            id: result.id,
                            email: result.email
                        })
                        res.status(201).json({token, id:result.id, email:result.email});
                    }
                    else {
                        throw next({
                            name: `BadRequest`,
                            errors: [{
                                msg: `Invalid E-Mail/Password`
                            }]
                        })
                    }
                }
                else {
                    throw next({
                        name: `BadRequest`,
                        errors: [{
                            msg: `Invalid E-Mail/Password`
                        }]
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    // router.post('/google-login', UserController.googleLogin);
    static googleLogin(req, res){
        let google_token = req.headers.google_token;
        let email = null;
        let newUser = false;
        googleVerification(google_token)
            .then(payload => {
                email = payload.email;
                let options = {
                    where: {email}
                }
                return User.findOne(options)
            })
            .then(user => {
                if(user){
                    return user;
                }
                else {
                    newUser = true;
                    let input = {
                        email,
                        password: process.env.DEFAULT_GOOGLE_PASS
                    }
                    return User.create(input);
                }
            })
            .then(result => {
                let code = newUser ? 201 : 200;
                let token = generateToken({
                    id: result.id,
                    email: result.email
                })
                res.status(code).json({
                    token
                });
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = UserController;
