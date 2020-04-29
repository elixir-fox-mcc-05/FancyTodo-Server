const { User } = require('../models/index.js');
const { checkPassword } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

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
                        res.status(200).json({token});
                    }
                    else {
                        return next({
                            name: `BadRequest`,
                            errors: [{
                                msg: `Invalid E-Mail/Password`
                            }]
                        })
                    }
                }
                else {
                    return next({
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
}

module.exports = UserController;
