const { User } = require("../models/index.js")
const { verifyPassword } = require("../helpers/bcrypt.js")
const { createToken } = require("../helpers/jwt.js")

class userController {
      static register(req,res){
        let { email, password } = req.body
        let payload = {
          email, password
        }
        User.create(payload)
          .then(result =>{
            res.status(201).json({
                message: 'New user successfully registered',
                id: result.id,
                email: result.email
            })
          })
          .catch(error =>{
            res.status(500).json({
                message:'InternalServerError',
                error
            })
          })
    }
    static login(req,res){
      let { email, password } = req.body
      let logInPayload = {
          email, password
      }
      User.findOne({
          where:{
            email : email 
        }
      })
        .then(result =>{
            if (result) {
                let verified = verifyPassword( logInPayload.password, result.password )
                if(verified){
                    //if given password match with database password, create token.
                    // result.id,result.email,access_token
                    let user = {
                        id: result.id,
                        email: result.email,
                        password: result.password
                    }
                    let token = createToken(user)
                    res.status(200).json({
                        id: result.id,
                        email: result.email,
                        access_token: token
                    })
                } else {
                    //Bad Request, invalid password/email
                    res.status(400).json({
                        message: 'BadRequest',
                        error: 'Invalid email/password'
                    })
                }
            } else {
                //Bad Request, invalid password/email
                res.status(400).json({
                    message: 'BadRequest',
                    error: 'Invalid email/password'
                })
            }
        })
        .catch(error => {
            //Internal Server Error -- May be attributed to Sequelize Validation Error
            res.status(500).json({
                message:'InternalServerError',
                error
            })
        })
    }


}

module.exports = userController