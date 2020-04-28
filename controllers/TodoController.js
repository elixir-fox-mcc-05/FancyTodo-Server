const { Todo } = require('../models');

class TodoController {
  static findAll(req, res) {
    let UserId = req.UserId;
    let options = {
      where: {
        UserId
      },
      order: [["id", "ASC"]]
    }
    Todo.findAll(options)
      .then(data => {
        res.status(200).json({
          msg: data
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }
  static createTodo(req, res) {
    let { title, description, status, due_date } = req.body;
    let UserId = req.UserId;
    Todo.create({
      title,
      description,
      status,
      due_date,
      UserId
    })
      .then(data => {
        res.status(201).json({
          msg: data
        })
      })
      .catch(err => {
        if(err.errors[0].type == "Validation error") {
          res.status(400).json({
            error: err
          });
        } else {
          res.status(500).json({
            error: err.message
          });
        }
      });
  }
  static findOne(req, res) {
    let { id } = req.params;
    Todo.findByPk(id)
      .then(data => {
        if(data){
          res.status(200).json({
            data
          });
        } else {
          res.status(404).json({
            error: `Data Not Found`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      });
  }
  static updateTodo(req, res) {
    let { title, description, status, due_date } = req.body;
    let { id } = req.params;
    Todo.update({
      title,
      description,
      status,
      due_date
    }, {
      where: {
        id
      },
      returning: true
    })
      .then(data => {
        if(data[0] > 0){
          res.status(200).json({
            data: data[1]
          });
        } else {
          res.status(404).json({
            error: `Data Not Found`
          });
        }
      })
      .catch(err => {
        if(err.errors[0].type == "Validation error") {
          res.status(400).json({
            error: err
          });
        } else {
          res.status(500).json({
            error: err.message
          });
        }
      });

  }
  static deleteTodo(req, res) {
    let { id } = req.params;
    let deletedData = {};
    Todo.findByPk(id)
      .then(result => {
        deletedData = result;
        return Todo.destroy({
          where: {
            id
          }
        })
      })
      .then(data => {
        if(deletedData) {
          res.status(200).json({
            deletedData
          });
        } else {
          res.status(404).json({
            error: `Data Not Found`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        });
      });

  }
}

module.exports = TodoController;