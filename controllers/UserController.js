const { User } = require('../models');
const { compare } = require('../helpers/encrypt.js');
const { userToken } = require('../helpers/jwt.js');
const googleVerification = require('../helpers/googleOauthApi.js');
const axios = require('axios');

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
  static googleLogin(req, res, next) {
    let googleToken = req.headers.google_token;
    let email = null;
    let newUser = false;

    googleVerification(googleToken)
      .then(payload => {
        email = payload.email;
        return User.findOne({
          where: {
            email
          }
        })
      })
      .then(user => {
        if(user) {
          return user;
        } else {
          newUser = true;
          return User.create({
            email,
            password: process.env.DEFAULT_GOOGLE_PASSWORD
          })
        }
      })
      .then(user => {
        let code = newUser ? 201 : 200;

        let token = userToken({
          id: user.id,
          email: user.email
        });

        res.status(code).json({
          token
        });
      })
      .catch(err => {
        return next(err);
      })
  }
  static facebookLogin(req, res, next) {
    let access_token = req.headers.accesstoken;
    let email;
    let newUser = false;

    axios.get(`
    https://graph.facebook.com/v6.0/me?fields=email&access_token=${access_token}`)
      .then(result => {
        console.log(result.data);
        email = result.data.email;
        return User.findOne({
          where: {
            email
          }
        })
      })
      .then(user => {
        if(user) {
          return user;
        } else {
          return User.create({
            email,
            password: process.env.DEFAULT_FACEBOOK_PASSWORD
          })
        }
      })
      .then(user => {
        let code = newUser ? 201 : 200;

        let token = userToken({
          id: user.id,
          email: user.email
        });

        res.status(code).json({
          token
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = UserController;