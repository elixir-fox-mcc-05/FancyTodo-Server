const { User } = require('../models');
const { compare } = require('../helpers/encrypt.js');
const { userToken } = require('../helpers/jwt.js');

class UserController {
  static register(req, res, next) {
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
        return next(err);
      });
  }
  static login(req, res, next) {
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
            return next({
              code: 400,
              name: "Bad Request",
              msg: `Password Salah`
            });
          }
        } else {
          return next({
            code: 400,
            name: "Bad Request",
            msg: `Email/Password Salah`
          });
        }
      })
      .catch(err => {
        return next(err);
      })
  }
}

module.exports = UserController;