const { Todo } = require("../models")


class Controller {
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

    static search(req, res, next) {
        let id = req.params.id
        Todo.findOne({ where: { id }, where: {UserId: req.currentUserId} })
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

    static update(req, res, next) {
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
                if (data) Todo.update(payload, { where: { id: id }, where: {UserId: req.currentUserId} })
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
                next(err)
            })
    }

    static delete(req, res, next) {
        let id = +req.params.id
        Todo.findOne({ where: { id } })
            .then((data) => {
                if (data) {
                    Todo.destroy({ where: { id: id }, where: {UserId: req.currentUserId} })
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

    static showComplete(req, res, next) {
        Todo.findAll({ where: { UserId: req.currentUserId , status: true} })
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
}

module.exports = Controller