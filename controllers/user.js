const { User } = require('../models')
const {get_token} = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let { email, password } = req.body
        User.create({ email, password })
            .then(data => {
                res
                  .status(201)
                  .json({ msg: 'successfully created', new_data: data })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({ where: { email, password } })
        .then(data => {
            if (data) {
                let token = (get_token(data.dataValues))
                    res
                      .status(200)
                      .json({ token })
                } else {
                    next(err)
                }
            })
            .catch(err => {-
                next(err)
            })
    }
}

module.exports = UserController