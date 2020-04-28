const { Todo } = require("../models");

function authorization(req, res, next) {
  let { id } = req.params;

  Todo.findByPk(id).then((result) => {
    if (result) {
      if (result.UserId == req.currentUserId) {
        next();
      } else {
        res.status(401).json({
          msg: "unauthorized!",
        });
      }
    } else {
      res.status(400).json({
        msg: "not found",
      });
    }
  });
}

module.exports = authorization;
