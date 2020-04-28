const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication (req, res, next) {
    let token = req.headers.token
    try {
        let decoded = verifyToken(token)
        let { id } = decoded
        User.findByPk(id)
            .then(data => {
                if(data) {
                    req.currentUserId = id
                    next()
                } else {
                    res.status(401).json({
                        msg: 'Please login first'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error',
                    err
                })
            })
    } catch (err) {
        res.status(500).json({
            msg: 'internal server error',
            err
        })
    }
}

module.exports = {
    authentication
}