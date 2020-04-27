const { User } = require('../models');
const { compare } = require('../helpers/encrypt.js');
const userToken = require('../helpers/jwt.js');

class UserController {
  static register(req, res) {
    let { email, password } = req.body;
    User.create({
      email,
      password
    })
      .then(data => {
        res.status(201).json({
          data
        });
      })
      .catch(err => {
        res.status(400).json({
          error: err.message
        });
      });
  }
  static login(req, res) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(result => {
        if(result) {
          if(compare(password, result.password)) {
            let token = userToken({
              id: result.id,
              email: result.email
            });
            res.status(200).json({
              token
            });
          } else {
            res.status(400).json({
              err: `Password Salah`
            });
          }
        } else {
          res.status(400).json({
            err: `Email/Password Salah`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  }
}

module.exports = UserController;