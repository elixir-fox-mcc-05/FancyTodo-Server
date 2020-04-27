const { Todo } = require('../models')

class TodoController {
    static findAll(req, res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({
                    todos: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static findOne(req, res) {
        let { id } = req.params
        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({
                    todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })

    }

    static create(req, res) {
        let { title, description, status, due_date } = req.body;
        Todo.create({
                title,
                description,
                status,
                due_date
            })
            .then(data => {
                res.status(201).json({
                    todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static update(req, res) {
        let { title, description, status, due_date } = req.body;
        let { id } = req.params;
        Todo.update({
                title,
                description,
                status,
                due_date
            }, {
                where: { id }
            })
            .then(_ => {
                return Todo.findByPk(id)
            })
            .then(data => {
                res.status(201).json({
                    todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static delete(req, res) {
        let { id } = req.params
        Todo.destroy({
                where: { id }
            })
            .then(data => {
                res.status(200).json({
                    msg: `todo with id ${id} succesfully deleted`
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