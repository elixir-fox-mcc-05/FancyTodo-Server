const { User } = require("../models/index.js")
const { verifyPassword } = require("../helpers/bcrypt.js")
const { createToken } = require("../helpers/jwt.js")
const {OAuth2Client} = require('google-auth-library');

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
            console.log(error)
            //Internal Server Error -- May be attributed to Sequelize Validation Error
            res.status(500).json({
                message:'InternalServerError',
                error
            })
        })
    }
    static googleSign(req,res,next){
        // 0. Di sini kita menerima id_token dari main.js client
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let email = ""
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            // 1. Kita ambil ticket-nya, lalu ambil email di dalamnya menggunakan kode berikut
            email = ticket.getPayload().email
            // 2. Kita cek di database apakah user dengan email ini sudah terdaftar atau belum. Jangan lupa return dan lanjutkan di .then berikutnya
            // console.log("===================")
            // console.log(email, ticket)
            // console.log("===================")
            return User.findOne({
                where:{
                    email: email
                }
            })
        })
        .then(data =>{
            // console.log("===================")
            // console.log(data)
            // console.log("===================")
            // 3. Kalau data-nya ada, kita buatkan token dan kembalikan ke server
            // Kalau datanya tidak ada, kita daftarkan(register) ke database kita
            if(data){
                console.log("===================")
                console.log('USER FOUND')
                console.log("===================")
                let user = {
                    id: data.id,
                    email: data.email,
                }
                let token = createToken(user)
                res.status(200).json({
                    id: data.id,
                    email: data.email,
                    access_token:token
                })
            } else {
                //jika tidak ada, daftarkan
                return User.create({
                    email,
                    password: process.env.GOOGLE_USER_PASSWORD
                })
            }
        })
        .then(data => {
            //Setelah didaftarkan, kita sign in user baru ini dengan buatkan token di sini
            console.log("===================")
            console.log(data)
            console.log("===================")
 
            let user = {
                id: data.id,
                email: data.email,
                password: data.password
            }
            let token = createToken(user)
            res.status(201).json({
                id: data.id,
                email: data.email,
                access_token: token
            })
            // setelah ini, jangan lupa buat fungsi log out di main.js client-side
        })
        .catch(error => {
            console.log(error)
        })
    }

}

module.exports = userController