let { Todo } = require('../models/index')

class TodosController {
    static findAll (req, res) {
        let UserId = req.currentUserId
        Todo.findAll({
            where: { UserId }
        })
            .then(data => {
                res.status(200).json({
                    Todos: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static createTodo (req, res) {
        let { title, description, due_date } = req.body
        let UserId = req.currentUserId
        Todo.create({
            title,
            description,
            due_date,
            UserId
        })
            .then(data => {
                console.log(data)
                res.status(201).json({
                    Todo: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
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
                    error: err
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
                res.status(200).json({
                    msg: `Todo with id ${id} successfully updated`
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
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
                    error: err
                })
            })
    }
}

module.exports = TodosController