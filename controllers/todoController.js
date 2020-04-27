const { Todo } = require('../models/index.js');

class TodoController {
    static createTodo(req,res) {
    
    }

    static getAllTodo(req,res) {
        
        Todo
        .findAll()
        .then(todos => {
            res.status(200).json({
                Todos: todos
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }

    static getTodoById(req,res) {
        const { id } = req.params
        
        Todo
        .findByPk(id)
        .then(todo => {
            res.status(200).json({
                Todo: todo
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }

    static UpdateTodo(req,res) {
        
    }

    static deleteTodo(req,res) {
        
    }
}

module.exports = TodoController;
