const { Todo } = require('../models');

class TodoController {
    static create(req, res, next) {
        let { title, description, due_date, UserId } = req.body;
        const values = {
            title,
            description,
            status: false,
            due_date,
            UserId: req.currentUserId
        }
        Todo.create(values)
            .then(todo => {
                res.status(201).json({ Todo: todo });
            })
            .catch(err => {
                next(err);
            })
    }

    static findAll(req, res, next) {
        const options = {
            orderBy: 'id'
        }
        Todo.findAll(options)
            .then(todo => {
                res.status(200).json({ Todos: todo });
            })
            .catch(err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err }]
                })
            })
    }

    static delete(req, res, next) {
        const id = Number(req.params.id);
        const options = {
            where: {
                id
            }, 
            returning: true
        };
        Todo.destroy(options)
            .then(data => {
                res.status(200).json({
                    message: `Successfully delete todo`,
                });
            })
            .catch( err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err }]
                })
            })
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const { title, description, due_date } = req.body;
        const options = {
            where: {
                id
            }, 
            returning: true
        }
        const values = {
            title,
            description,
            due_date
        }
        Todo.update(values, options)
            .then(todo => {
                res.status(200).json({
                    message: 'todo updated',
                    todo: todo[1][0]
                });
            })
            .catch(err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err }]
                })
            })
    }
}

module.exports = TodoController;