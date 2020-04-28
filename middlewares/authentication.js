const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

function authentication(req, res, next) {
    try {
        console.log('auth test user');
        if (req.headers.access_token) {
            let verify = verifyToken(req.headers.access_token)
            console.log(verify)
            User.findOne({
                    where: {
                        id: verify.id
                    }
                })
                .then((result) => {
                    req.currentUserId = result.id
                    console.log('success auth');
                    next()
                })
                .catch(next)
        } else {
            next({ name: 'Unauthenticated' })
        }
    } catch {
        next({ name: 'Unauthenticated' })
    }
}

module.exports = authentication