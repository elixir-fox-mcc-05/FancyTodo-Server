const { verifyToken } = require('../helpers/jwt.js')
const {User} = require('../models')


function authentication (req, res, next) {
    let token = req.headers.token
    // console.log('ini token \n', token)

    try {
        let decode = verifyToken(token)
        let {id} = decode
        // console.log(decode)
        User.findByPk(id)
            .then(result => {
                if(result) {
                    req.userId = id
                    next()
                } else {
                    res.status(401).json({
                        msg: 'login first'
                    })
                }

            })
            .catch(err => {
                res.status(500).json({error : err.message})
            })
    } catch (error) {
        res.status(401).json({error : error.message})
    }
}


module.exports = authentication;