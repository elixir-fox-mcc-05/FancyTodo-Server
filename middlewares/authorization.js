const { Todo } = require('../models');

const authorization = (req, res, next) => {
  let { id } = req.params;

  Todo.findByPk(id)
    .then(result => {
      if(result) {
        if(result.UserId == req.UserId) {
          next();
        } else {
          return next({
            code: 401,
            name: "Unauthorized Error",
            msg: `You cannot edit/delete this Todo`
          });
        }
      } else {
        return next({
          code: 404,
          name: "NotfoundError",
          msg: `Data Not Found`
        });
      }
    })
    .catch(err => {
      return next(err);
    })
}

module.exports = authorization;