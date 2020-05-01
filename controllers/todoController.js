const { Todo, User } = require('../models');

class TodoController {
    static createTodo(req, res, next) {
        const { title, description, due_date } = req.body;
        const UserId = req.userId;

        Todo
            .create({
                title,
                description,
                due_date: new Date(due_date),
                UserId
            })
            .then(newTodo => {
                res.status(201).json({
                    Todo: newTodo
                });
            })
            .catch(err => {
                next(err);
            })
    }

    static getAllTodo(req, res, next) {
        const id = req.userId;

        User
            .findOne({
                include: [Todo],
                where: {
                    id
                },
                order: [[Todo, 'id', 'desc']]
            })
            .then(todos => {
                res.status(200).json({
                    Todos: todos
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getTodoById(req, res, next) {
        const { id } = req.params
        
        Todo
            .findByPk(id)
            .then(todo => {
                res.status(200).json({
                    Todo: todo
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static updateTodo(req, res, next) {
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
                next(err);
            })
    }

    static checkTodo(req, res, next) {
        const { id } = req.params;
        const { status } = req.body;

        Todo
            .update({
                status
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
                next(err);
            })
    }

    static deleteTodo(req, res, next) {
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
                next(err);
            })
    }
}

module.exports = TodoController;
