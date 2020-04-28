const { User } = require('../models')
const {get_token} = require('../helpers/jwt')

class UserController {
    static register(req, res) {
        let { email, password } = req.body
        User.create({ email, password })
            .then(data => {
                res
                  .status(201)
                  .json({ msg: 'successfully created', new_data: data })
            })
            .catch(err => {
                if (err.name == 'SequelizeValidationError') {
                    res
                      .status(400)
                      .json({ msg: err.message })

                    th
                } else {
                    res
                      .status(500)
                      .json({ err })
                }
            })
    }

    static login(req, res) {
        let { email, password } = req.body
        User.findOne({ where: { email, password } })
        .then(data => {
            if (data) {
                let token = (get_token(data.dataValues))
                    res
                      .status(200)
                      .json({ token })
                } else {
                    res
                      .status(404)
                      .json({ msg: 'NOT FOUND'  })
                }
            })
            .catch(err => {-
                res
                  .status(500)
                  .json({ msg: err.message })
            })
    }
}

module.exports = UserController