const { User } = require('../models');
const { compare } = require('../helpers/bycrypt.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');

class UserController {
    static findAll(req, res) {
        const options = {
            orderBy: 'id'
        }
        User.findAll(options)
            .then(users => {
                res.status(200).json({ users });
            })
            .catch(err => {
                res.status(500).json({ Error: err });
            })
    }

    static signup(req, res) {
        const { name, email, password } = req.body;
        const values = {
            name,
            email,
            password
        }
        User.create(values)
            .then(users => {
                res.status(201).json({ users });
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }

    static signin(req, res) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    if (compare(password, user.password)) {
                        const token = generateToken({ name: user.name, email: user.email })
                        res.status(200).json({ token });
                    } else {
                        res.status(200).json({ message: `password atau email salah`});
                    }
                } else {
                    res.status(200).json({ message: `password atau email salah`});
                }
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }

    static delete(req, res) {
        const email = req.params.email;
        const options = {
            where: {
                email
            }
        }
        User.destroy(options)
            .then(user => {
                res.status(200).json({ user });
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }
}

module.exports = UserController;