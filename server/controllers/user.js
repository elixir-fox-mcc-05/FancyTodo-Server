const { User } = require('../models')
const Helper = require('../helper/helper')

class Controller {
    static register(req, res) {
        const options = {
            email: req.body.email,
            password: req.body.password
        }
        User
            .create(options)
            .then(data => {
                res.status(201).json({ id: data.id, email: data.email })
            })
            .catch(err => { res.status(500).json({ error: err }) })
    }

    static login(req, res) {
        let { email, password } = req.body

        User
            .findOne({ where: { email } })
            .then(data => {
                if (data) {
                    let compare = Helper.passwordCompare(password, data.password)

                    if (compare) {
                        let token = Helper.generateToken({ id: data.id, email: data.email })
                        res.status(200).json({ token })
                    } else {
                        res.status(401).json({
                            msg: `Wrong Email/Password`
                        })
                    }

                } else {
                    res.status(401).json({
                        msg: `Wrong Email/Password`
                    })
                }
            })
            .catch(err => { res.status(400).json({ error: err }) })
    }
}

module.exports = Controller