const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static register(req, res, next){
        const {email, password} = req.body
        let payload = {
            email, password
        }
        User.create(payload)
        .then(result => {
            let user = {
                id: result.id,
                email: result.email
            }
            let token = generateToken(user)
            return res.status(201).json({
                access_token : token, 
                msg: 'Successfully Registered'
            })
        })
        .catch(err => {
            return next(err)
        })

    }
    static login (req, res, next){
        const {email, password} = req.body
        let payload = {
            email, password
        }
        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then(result => {
            if(result){
                let compare = decryptPassword(payload.password, result.password)
                console.log(payload.password, result.password);
                if(compare){
                    let user = {
                        id: result.id,
                        email: result.email
                    }
                    let token = generateToken(user)
                    return res.status(200).json({
                        access_token : token
                    })
                }
                else {
                    return next({
                        name : 'Bad Request',
                        errors: [{message: "Invalid email/password"}]
                    })
                }
            }
            else {
                return next({
                    name : 'Bad Request',
                    errors: [{message: "Invalid email/password"}]
                })
            }
        })
        .catch(err => {
            return next(err)
        })
    }
    static googleSign (req, res, next) {
        let email = ''
        const client = new OAuth2Client(process.env.CLIENT_ID);

        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                email = ticket.getPayload().email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(data => {
                if(data) {
                    let payload = {
                        email: data.email,
                        id: data.id
                    }
                    let token = generateToken(payload)
                    return res.status(200).json({
                        token,
                        id : data.id, 
                        email : data.email
                    })
                }
                else {
                    return User.create({
                        email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                }
            })
            .then(data=> {
                let payload = {
                    email: data.email,
                    id: data.id
                }
                let token = generateToken(payload)
                return res.status(201).json({
                    token,
                    id : data.id, 
                    email : data.email
                })
            })
            .catch(err => {
                return next(err)
            })
    
    }
}

module.exports = UserController