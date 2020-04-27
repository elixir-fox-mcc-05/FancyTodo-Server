const { User } = require('../models')

class Controller {
    static register(req, res) {
        const options = {
            email: req.body.email,
            password: req.body.password
        }
        User
            .create(options)
            .then(data => {
                res.status(201).json({ data })
            })
            .catch(err => { res.status(500).json({ error: err }) })
    }

    static login(req, res) {
        const options = {
            where: { email: req.body.email }
        }
        User
            .findOne(options)
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(err => { res.status(500).json({ error: err }) })
    }
}

module.exports = Controller