const { Todo } = require('../models');

class TodoController {
    static create(req, res) {
        const { title, description, due_date, UserId } = req.body;
        const values = {
            title,
            description,
            status: false,
            due_date,
            UserId
        }
        Todo.create(values)
            .then(todo => {
                res.status(201).json({ Todo: todo });
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }

    static findAll(req, res) {
        const options = {
            orderBy: 'id'
        }
        Todo.findAll(options)
            .then(todo => {
                res.status(200).json({ Todos: todo });
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }
    static update(req, res) {

    }

    static delete(req, res) {
        const id = Number(req.params.id);
        const options = {
            where: {
                id
            }
        };
        Todo.destroy(options)
            .then(data => {
                res.status(200).json(`Successfully delete todo`);
            })
            .catch( err => {
                res.status(500).json( { Error: err.message });
            })
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const { title, description, due_date } = req.body;
        const options = {
            where: {
                id
            }
        }
        const values = {
            title,
            description,
            due_date
        }
        Todo.update(values, options)
            .then(todo => {
                res.status(200).json({ Todo: todo });
            })
            .catch(err => {
                res.status(500).json({ Error: err.message });
            })
    }
}

module.exports = TodoController;