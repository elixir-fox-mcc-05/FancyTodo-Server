let { Todo } = require('../models/index')

class TodosController {
    static findAll (req, res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({
                    Todos: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: err
                })
            })
    }
    static createTodo (req, res) {}
    static findById (req, res) {}
    static updateTodo (req, res) {}
    static deleteTodo (req, res) {}
}

module.exports = TodosController