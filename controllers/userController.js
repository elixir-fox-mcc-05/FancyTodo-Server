const { User } = require('../models/index.js');
const { checkPassword } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
    // router.post('/register', UserController.registerUser);
    static registerUser(req, res){
        let { email, password } = req.body;
        let input = {
            email,
            password
        }
        User.create(input)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                    password: data.password
                })
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })
    }

    // router.post('/login', UserController.loginUser);
    static loginUser(req,res){
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
                        res.status(201).json({token});
                    }
                    else {
                        res.status(400).json({msg: `Please Login`});
                    }
                }
                else {
                    res.status(400).json({msg: `Please Login`});
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })
    }
}

module.exports = UserController;

///// catatan //////
// status 400 register x
// status 400 login ??