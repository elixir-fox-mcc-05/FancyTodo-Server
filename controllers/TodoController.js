const { Todo } = require('../models')

class TodoController {

    static findAll(req, res, next) {
        Todo.findAll({
                where: { UserId: req.currentUserId },
                order: [
                    ['id', 'ASC']
                ]
            })
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
        let date = new Date(req.body.due_date)
        let newdate = `${date.getMonth()} ${date.getDate()} ${date.getFullYear()} 23:59:59`
        let payload = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(newdate),
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
        let date = new Date(req.body.due_date)
        let newdate = `${date.getMonth()} ${date.getDate()} ${date.getFullYear()} 23:59:59`
        let payload = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(newdate),
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
                console.log('berhasil update')
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