const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

function authentication(req, res, next) {
  let token = req.headers.token;

  try {
    let decoded = verifyToken(token);
    let { id } = decoded;
    
    User.findByPk(id)
     .then((result) => {
      if (result) {
        req.currentUserId = id; 
        
        next();
      } else {
        res.status(401).json({
          msg: "Unauthorized, please login first",
          err: err
        });
      }
    })
    .catch(err=>{
        res.status(500).json({
            msg: 'internal server error',
            err: err
        })
    })

  } catch (err) { 
      res.status(500).json({
          msg: 'internal server error',
          err: err
      })
   }
}

module.exports = authentication;
