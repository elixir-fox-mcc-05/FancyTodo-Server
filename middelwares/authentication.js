let { veriryToken } = require('../helpers/jwt.js')
let { User } = require('../models')
let jwt = require('jsonwebtoken')

function authentication ( req , res , next) {
    let token = req.headers.token

    try {
        let decoded = jwt.verify( token , 'secret')
        User.findByPk(decoded.id)
        .then(result=>{
            if(result) {
                req.currentUser = result.dataValues
                next()
            } else {
                res.status(500).json({
                    error:err
                })
            }
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    } catch (err) {

    }
}

module.exports = authentication