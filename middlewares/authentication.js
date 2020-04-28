const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = (req, res, next) => {
    let token = req.headers.token

    try {
        let decoded = verifyToken(token)
        let { id } = decoded
        User.findByPk(id)
            .then(result => {
                if (result) {
                    req.currentUserId = id
                    next()
                } else {
                    res.status(401).json({
                        msg: 'User is not logged in'
                    })
                }
            })            
    } catch (error) {

    }
}