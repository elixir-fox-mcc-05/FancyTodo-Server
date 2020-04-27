const { Todo } = require('../models')

class TodoController {

    static findAll(req, res, next) {
        Todo.findAll({ where: { UserId: req.currentUserId } })
            .then((result) => {
                return res.status(200).json(result)
            })
            .catch((err) => {
                next({
                    name: 'NotFound',
                    errors: [{ msg: 'Data Not Found' }]
                })
            })
    }

    static add(req, res, next) {
        let payload = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.currentUserId
        }
        Todo.create(payload)
            .then((result) => {
                return res.status(201).json({ result })
            })
            .catch((err) => {
                next({
                    name: 'InternalServerError',
                    errors: [{ msg: 'Failed to Create.' }]
                })
            })
    }

    static edit(req, res, next) {
        let id = +req.params.id
        let payload = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.currentUserId
        }
        Todo.update(payload, { where: { id: id } })
            .then((result) => {
                return res.status(201).json({
                    title: req.body.title,
                    description: req.body.description,
                    status: req.body.status,
                    due_date: req.body.due_date
                })
            })
            .catch((err) => {
                next({
                    name: 'InternalServerError',
                    errors: [{ msg: 'Failed to Update.' }]
                })
            })
    }

    static delete(req, res, next) {
        let id = +req.params.id
        Todo.destroy({ where: { id: id } })
            .then((result) => {
                return res.status(201).json({ msg: 'Success Delete' })
            })
            .catch((err) => {
                next({
                    name: 'InternalServerError',
                    errors: [{ msg: 'Failed to Delete.' }]
                })
            })
    }

}

module.exports = TodoController