const {verify} = require('../helpers/jwt')
const {User} = require('../models')

function project_authentication(req, res, next) {
    const { token } = req.headers
    let decode = verify(token)
    User.findByPk(decode.id)
        .then(data => {   
            if (data) {
                req.inviter = data.id
                next()
            } else {
                res
                .status(404)
                .json({ msg: 'NOT FOUND' })
            }
        })
        .catch(err => {
            next(err)
        })
}


module.exports = project_authentication