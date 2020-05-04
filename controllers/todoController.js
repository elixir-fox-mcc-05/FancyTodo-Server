const { Todo } = require("../models");

class TodoController {
  static findAll(req, res, next) {
    let UserId = req.currentUserId;
    Todo.findAll({
      where: {
        UserId,
      },
      include :['User']
    })
      .then((data) => {
        res.status(200).json({
          todos: data,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    let { id } = req.params;
    Todo.findByPk(id)
      .then((data) => {
        if (!data) {
          throw {
            msg: `id with ${id} is not found`,
            code: 404,
          };
        } else {
          res.status(200).json({
            todo: data,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static create(req, res, next) {
    let { title, description, due_date } = req.body;
    let UserId = req.currentUserId;

    Todo.create({
      title,
      description,
      due_date,
      UserId,
    })
      .then((data) => {
        res.status(201).json({
          todo: data,
          msg: "success create todo",
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static update(req, res, next) {
    let { id } = req.params;
    let updatedTodo = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    };

    Todo.update(updatedTodo, {
      where: { id },
      returning: true,
    })
      .then((result) => {
        res.status(201).json({
          msg: `todo with id ${id} succesfully updated`,
          todo: result[1][0],
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static delete(req, res, next) {
    let { id } = req.params;
    Todo.destroy({
      where: { id },
    })
      .then((data) => {
        if (data) {
          res.status(200).json({
            msg: `todo with id ${id} succesfully deleted`,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = TodoController;
