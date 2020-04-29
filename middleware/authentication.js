const Helper = require('../helper/helper.js')
const { User } = require('../models')

function authentication(req, res, next) {
    let token = req.headers.token

    try {
        let decoded = Helper.verify(token)
        let { id } = decoded
        User
            .findByPk(id)
            .then(data => {
                if (data) {
                    req.UserId = decoded.id
                    next()
                } else {
                    res.status(401).json({
                        msg: `Please login first`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: `internal server error`
                })
            })
    } catch (err) {
        res.status(500).json({
            msg: 'internal server error'
        })
    }
}

module.exports = authentication