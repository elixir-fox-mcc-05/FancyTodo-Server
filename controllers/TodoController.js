const { Todo } = require('../models');
const axios = require('axios');

class TodoController {
  static findAll(req, res, next) {
    let UserId = req.UserId;
    let weather = {};
    let options = {
      where: {
        UserId
      },
      order: [["id", "ASC"]]
    }
    axios.get('https://www.metaweather.com/api/location/1047378/')
      .then(result => {
        weather = result.data;
        return Todo.findAll(options)
      })
      .then(data => {
        res.status(200).json({
          Todos: data,
          weather
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static createTodo(req, res, next) {
    let { title, description, status, due_date } = req.body;
    let UserId = req.UserId;
    let ProjectId = req.params.projectid || null;
    Todo.create({
      title,
      description,
      status,
      due_date,
      UserId,
      ProjectId
    })
      .then(data => {
        res.status(201).json({
          Todo: data
        })
      })
      .catch(err => {
        return next(err);
      });
  }
  static findOne(req, res, next) {
    let { id } = req.params;
    Todo.findByPk(id)
      .then(data => {
        if(data){
          res.status(200).json({
            Todo: data
          });
        } else {
          return next({
            code: 404,
            name: "404NotFoundError",
            msg: `Data Not Found`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static updateTodo(req, res, next) {
    let { title, description, status, due_date } = req.body;
    let { id } = req.params;
    let UserId = req.UserId;
    if(!title || !description) return next({
      code: 400,
      name: "Bad Request",
      msg: `Title and/or Description is required`
    });
    Todo.update({
      title,
      description,
      status,
      due_date,
      UserId
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
          return next({
            code: 404,
            name: "404NotFoundError",
            msg: `Data Not Found`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static deleteTodo(req, res, next) {
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
          return next({
            code: 404,
            name: "404DataNotFoundError",
            msg: `Data Not Found`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = TodoController;