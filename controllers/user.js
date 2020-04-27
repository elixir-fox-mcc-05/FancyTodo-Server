const {User} = require("../models")
const {decryptPassword} = require("../helpers/bcrypt")
const {generateToken} = require("../helpers/jwt")
const {OAuth2Client} = require('google-auth-library');
class Controller{  

    static register(req,res,next){
        let payload = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(payload);
        
        User.create(payload)
        .then(result =>{
            let user = {
                id:result.id,
                email:result.email
            }
            let token = generateToken(user)
            res.status(201).json({
                msg:'Succes Create User',
                Data:{
                    'id':user.id,
                    'email':user.email,
                    'token': token 
                }
            })
        })
        .catch(err=>{
            res.status(500).json({
                'msg':"Internal Server Error",
                'error':err
            })
        })
    }

    static gmailuser(req,res,next){
        const client = new OAuth2Client( process.env.CLIENT_ID)
        let email=''
        client.verifyIdToken({
            idToken:req.body.id_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket=>{
           email = ticket.payload.email
           return User.findOne({
                where:{
                    email:email
                }
            })
        })

        .then(result=>{
            
            if(result){                
                let payload = {
                    id: result.id,
                    email: result.email,
                    
                }
                let token = generateToken(payload)
                res.status(200).json({
                    Data:{
                        'id':result.id,
                        'email':result.email,
                        'token': token 
                    }

                })
            }else{
                let payload = {
                    email: email,
                    password: "usergmail"
                }
                
                User.create(payload)
                .then(result =>{
                    let user = {
                        id:result.id,
                        email:result.email
                    }
                    let token = generateToken(user)
                    res.status(201).json({
                        msg:'Succes Create User',
                        Data:{
                            'id':user.id,
                            'email':user.email,
                            'token': token 
                        }
                    })
                })
                .catch(err=>{
                    res.status(500).json({
                        'msg':"Internal Server Error",
                        'error':err
                    })
                })
            }

        })


        .catch(next)


    }

    static login(req,res,next){
        let payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where:{
                email:payload.email
            }
        })

        .then(result=>{
            if(result){
                
                let compare = decryptPassword(payload.password,result.password)
                // console.log(payload.password,result.password,compare);
                if(compare){
                    let user = {
                        id: result.id,
                        email: result.email
                    }
                    let token = generateToken(user)
                    res.status(200).json({
                        msg:'Succes find user',
                        Data:{
                            'id':user.id,
                            'email':user.email,
                            'token': token 
                        }
                    })
                }else {
                    res.status(400).json({
                        'type':'Bad Request',
                        'msg':'Invalid Email/password'
                    })
                }
            
            }else{
                // res.status(400).json({
                //     'type':'Bad Request',
                //     'msg':'Invalid Email/password'
                // })
                return next({
                    name :'err'})
            }

        })

    }

    static sendPassToEmail(req,res,next){
        let email = req.params.email
        User.findOne({
            where:{
                email:req.params.email
            }
        })
        .then(result=>{
            let pass = decryptPassword(result.password)
            console.log(result);
            
        })
        .catch(err=>{
            console.log(err);
            
        })



        
    }

}
module.exports = Controller