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

    static findOne(req, res, next) {
        let id = req.params.id
        Todo.findOne({ where: { id: id } })
            .then((result) => {
                if (result) {
                    return res.status(200).json(result)
                } else {
                    next({
                        name: 'NotFound',
                        errors: [{ msg: 'Data Not Found' }]
                    })
                }
            })
            .catch((err) => {
                next(err)
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
                return res.status(201).json(result)
            })
            .catch((err) => {
                next(err)
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
        Todo.findOne({ where: { id } })
            .then((data) => {
                if (data) Todo.update(payload, { where: { id: id } })
                else next({
                    name: 'NotFound',
                    msg: 'Data Not Found'
                })
            })
            .then((result) => {
                return res.status(200).json({
                    title: req.body.title,
                    description: req.body.description,
                    status: req.body.status,
                    due_date: req.body.due_date,
                    UserId: payload.UserId
                })
            })
            .catch((err) => {
                // if (err.name == 'SequelizeValidationError') {
                //     next(err)
                // } else {
                //     next({
                //         name: 'InternalServerError',
                //         errors: [{ msg: err }]
                //     })
                // }
                next(err)
            })
    }

    static delete(req, res, next) {
        let id = +req.params.id
        Todo.findOne({ where: { id } })
            .then((data) => {
                if (data) {
                    Todo.destroy({ where: { id: id } })
                        .then((result) => {
                            return res.status(201).json({ data })
                        })
                } else {
                    next({
                        name: 'NotFound',
                        msg: 'Data Not Found'
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

}

module.exports = TodoController