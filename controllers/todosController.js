let { Todo } = require('../models/index')

class TodosController {
    static findAll (req, res, next) {
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
                next(err)
            })
    }

    static createTodo (req, res, next) {
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
                    Todo: data,
                    notif: 'Todo successfully created!'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById (req, res, next) {
        let { id } = req.params
        Todo.findByPk(id)
            .then(data => {
                if(data) {
                    res.status(200).json({
                        Todo: data
                    })
                } else {
                    throw {
                        msg: "Todo not found",
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTodo (req, res, next) {
        let { id } = req.params
        let {title, description, due_date} = req.body
        Todo.update({
            title,
            description,
            status: false,
            due_date
        }, {
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({
                    notif: `Todo with id ${id} successfully updated`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTodo (req, res, next) {
        let { id } = req.params
        Todo.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({
                    notif: `Todo with id ${id} successfully deleted`
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TodosController