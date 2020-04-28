const { verifyToken } = require('../helpers/jwt.js');
const { User } = require('../models');

const authentication = (req, res, next) => {
  let token = req.headers.token;
  try {
    let decode = verifyToken(token);
    let { id } = decode;
    console.log(id);
    User.findByPk(id)
      .then(result => {
        if(result) {
          req.UserId = id;
          next();
        } else {
          res.status(401).json({
            msg: `Not Authenticated, Please Login First!`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: `Server error`
        });
      });
  } catch (error) {
    res.status(500).json({
      error: `Please Login First`
    });
  }

}

module.exports = authentication;