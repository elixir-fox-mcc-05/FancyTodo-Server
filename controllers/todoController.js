const { Todo } = require("../models");

class TodoController {
  static findAll(req, res) {
    Todo.findAll()
      .then((data) => {
        res.status(200).json({
          todos: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  }

  static findOne(req, res) {
    let { id } = req.params;
    Todo.findByPk(id)
      .then((data) => {
        if (!data) {
          res.status(400).json({
            msg: `id with ${id} is not found`,
          });
        } else {
          res.status(200).json({
            todo: data,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  }

  static create(req, res) {
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
          msg: 'success create todo'
        });
      })
      .catch((err) => {
        if (err.errors) {
          let errmessage = err.errors.map((error) => {
            return error.message;
          });
          res.status(400).json({
            msg: errmessage,
          });
        } else {
          res.status(500).json({
            error: 'internal server error',
            err: err
          });
        }
      });
  }

  static update(req, res) {
    let { title, description, status, due_date } = req.body;
    let { id } = req.params;
    Todo.update(
      {
        title,
        description,
        status,
        due_date,
      },
      {
        where: { id },
      }
    )
      .then((_) => {
        return Todo.findByPk(id);
      })
      .then((data) => {
        res.status(201).json({
          todo: data,
          msg: `todo with id ${id} succesfully updated`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }

  static delete(req, res) {
    let { id } = req.params;
    Todo.destroy({
      where: { id },
    })
      .then((data) => {
        if (data) {
          res.status(200).json({
            msg: `todo with id ${id} succesfully deleted`,
          });
        } else {
          res.status(404).json({
            msg: `todo with id ${id} is not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }
}

module.exports = TodoController;
