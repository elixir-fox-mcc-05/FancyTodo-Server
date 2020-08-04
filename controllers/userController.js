const {compare} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')
const {User} = require('../models')
const googleVerification = require('../helpers/googleOAuth')

class UserController {

    static list(req,res){

      User
        .findAll()
        .then(data => {
          let results = [];
            for(let i=0;i < data.length;i++){
              results.push({
                  id: data[i].id,
                  name: data[i].fullname
              })
            }
          res.status(200).json({
            results
          })
        })

    }

    static register(req,res){

        // console.log(req.body)
        let {first_name, last_name, password, email} = req.body
        let newUser = {first_name, last_name,  password, email}
        // console.log(newUser)
        User
            .create(newUser)
            .then(data => res.status(201).json({id :data.id,
                                                email : data.email
                                                }))
            .catch(err => {
              console.log(err)
              res.status(500).json({error : err.message})
                // res.status(500).json({error : err.message.split(',')})
            })

    }

    static login(req,res,next){

        const {email , password} = req.body

        User
            .findOne({where:{email : req.body.email}})
            .then(data => {

                if(data){

                    if (compare(password, data.password)){

                        let token = generateToken({
                                        id : data.id,
                                        email : data.email,
                                        password : data.password
                                    })
                        res.status(200).json({token : token})

                    }else {

                        res.status(400).json({error : 'invalid password'})

                    }
                }else {

                    res.status(401).json({error : 'invalid email'})

                }
                
                })
                // .catch(next)
            .catch(err => {
                            res.status(500).json({error : err.message})               
                            })

    }

    static googleLogin(req, res, next) {
        let google_token = req.headers.google_token;
        let email = null;
        let newUser = false;
        let first_name = null;
        let last_name = null
    
        googleVerification(google_token)
          .then(payload => {
            email = payload.email;
            first_name = payload.given_name;
            last_name = payload.family_name
            // console.log('payload: ', payload)
            // console.log('emaul: ', email)
            return User
              .findOne({
                where: {
                  email
                }
              })
          })
          .then(user => {
            if (user) {
              return user;
            } else {
              newUser = true;
              return User
                .create({
                    first_name,
                    last_name,
                  email,
                  password: process.env.DEFAULT_GOOGLE_PASSWORD
                });
            }
          })
          .then(user => {
            let code = newUser ? 201 : 200;
    
            const token = generateToken({
              id: user.id,
              email: user.email
            });
    
            res.status(code).json({
              token
            });
          })
          .catch(err => {
            next(err);
          })
      }

}

module.exports = UserController