const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication (req, res, next) {
  let token = req.headers.token

  try {
    let decodedid = verifyToken(token).id
    // let { id } = decoded
    User.findByPk(decodedid)
      .then(result => {
        if (result) {
          req.LoginId = decodedid
          next()
        } else {
          throw {
            msg: 'please login first',
            code: 401
          }
        }
      })
      .catch(err => {
        throw err
      })

  } catch (err) {
    next(err)
  }
}

module.exports = authentication