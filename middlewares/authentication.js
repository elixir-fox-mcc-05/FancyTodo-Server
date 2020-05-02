const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication (req, res, next) {
  let token = req.headers.token

  try {
    let decodedid = verifyToken(token)
    let { id } = decodedid
    // console.log(decodedid)
    User.findByPk(id)
      .then(result => {
        //   console.log(result)
        if (result) {
          req.LoginId = id
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