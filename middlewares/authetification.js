let { verifyToken } = require('../helpers/jwt')
let { User } = require('../models/index')

function authentification (req, res, next) { 
    let token = req.headers.access_token
    try {
        let decode = verifyToken(token)
        // console.log(decode);
        let id = decode.id
        User.findByPk(id)
        .then((data) => {
            if(data) {
                req.currentUserId = decode.id
                next()
            } else {
                res.status(401).json({
                    msg:'unautorized'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: 'server error'
            })
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'server error'
        })
    }
}

module.exports = authentification