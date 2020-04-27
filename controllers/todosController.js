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

    static createTodo (req, res) {
        let { title, description, due_date } = req.body
        Todo.create({
            title,
            description,
            due_date
        })
            .then(data => {
                res.status(201).json({
                    Todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: err
                })
            })
    }

    static findById (req, res) {
        let { id } = req.params
        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({
                    Todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: err
                })
            })
    }

    static updateTodo (req, res) {
        let { id } = req.params
        let {title, description, status, due_date} = req.body
        Todo.update({
            title,
            description,
            status,
            due_date
        }, {
            where: {
                id
            }
        })
            .then(() => {
                res.status(201).json({
                    msg: `Todo with id ${id} successfully updated`
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: err
                })
            })
    }

    static deleteTodo (req, res) {
        let { id } = req.params
        Todo.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({
                    msg: `Todo with id ${id} successfully deleted`
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: err
                })
            })
    }
}

module.exports = TodosController