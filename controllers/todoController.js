const { Todo } = require('../models');

class TodoController {
    static createTodo(req,res) {
        const { title, description, due_date } = req.body;

        Todo
        .create({
            title,
            description,
            due_date: new Date(due_date)
        })
        .then(newTodo => {
            res.status(201).json({
                Todo: newTodo
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
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

    static updateTodo(req,res) {
        const { id } = req.params;
        const { title, description, due_date } = req.body;

        Todo
        .update({
            title,
            description,
            due_date: new Date(due_date)
        }, {
            where: {
                id
            }
        })
        .then(() => {
            return Todo
            .findByPk(id)
        })
        .then(todo => {
            res.status(200).json({
                Todo: todo
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
    }

    static deleteTodo(req,res) {
        const { id } = req.params;

        Todo
        .destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.status(200).json({
                msg: `Success delete task with id ${id}`
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }
}

module.exports = TodoController;
