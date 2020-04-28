const {verify} = require('../helpers/jwt')
const {User} = require('../models')

function auth(req, res, next) {
    const { token } = req.headers
    let decode = verify(token)
    User.findByPk(decode.id)
        .then(data => {
            if (data) {
                req.UserId = data.id
                next()
            } else {
                res
                  .status(404)
                  .json({ msg: 'NOT FOUND' })
            }
        })
        .catch(err => {
            res
              .status(500)
              .json({ msg: 'Internal Server Error' })
        })
}


module.exports = auth