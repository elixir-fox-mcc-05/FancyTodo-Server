const { Todo } = require('../models');

const authorization = (req, res, next) => {
  let { id } = req.params;

  Todo.findByPk(id)
    .then(result => {
      if(result) {
        if(result.UserId == req.UserId) {
          next();
        } else {
          res.status(401).json({
            msg: `Not Authorized. You cannot edit/delete this Todo`
          });
        }
      } else {
        res.status(404).json({
          error: `Data Not Found`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: `Internal server error`
      });
    })
}

module.exports = authorization;