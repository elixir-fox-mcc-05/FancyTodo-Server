let { verifyToken } = require('../helpers/jwt.js')
let { User } = require('../models')

function authentication ( req , res , next) {
    let token = req.headers.token

    try {
        // let decoded = jwt.verify( token , 'secret')
        let decoded = verifyToken(token)
        User.findByPk(decoded.id)
        .then(result=>{
            if(result) {
                req.currentUser = result.dataValues
                next()
            } else {
                res.status(401).json({
                    msg : 'please login first'
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