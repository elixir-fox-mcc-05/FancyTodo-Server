const { Todo, User } = require('../models')
const send = require('../helpers/nodemailer')

class FancyTodo {
    static add(req, res, next) {
        const { UserId } = req
        const { title, description, status, due_date } = req.body
        Todo.create({ title, description, status, due_date, UserId })
            .then(data => {
                User.findByPk(UserId)
                    .then(user => {
                        send(user.email, title, due_date)
                        res
                          .status(201)
                          .json({ new_data: data }) 
                    })
                    .catch(err => {
                        next(err)
                    })
            })
            .catch(err => { 
                next(err)
            })
    }   

    static show(req, res, next) {
        const { UserId } = req
        if (UserId) {
            Todo.findAll({ where: { UserId } })
                .then(data => {
                    if (data) {
                        res
                          .status(200)
                          .json({ data }) 
                    } else {
                        next(err)
                    }
                })
                .catch(err => { 
                    next(err)
                })
        } else {
            next(err)
        }
    }

    static show_id(req, res, next) {
        const { UserId } = req
        const { id } = req.params
        Todo.findOne({ where: { id, UserId } })
            .then(data => { 
                if (data) {
                    res
                      .status(200)
                      .json({ data }) 
                } else {
                    next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Todo.destroy({ where: { id } })
            .then(data => {
                if (data) {
                    res
                      .status(204)
                      .json({ msg: `success delete with id ${id}` })
                } else {
                    next(errr)
                }
            })
            .catch(err => { 
                next(err)
        })
    }

    static edit(req, res, next) {
        const { id } = req.params
        const { title, description, status, due_date } = req.body
        Todo.update({ title, description, status, due_date }, { where: { id } })
            .then(data => { 
                if (data != 0) {
                    res
                    .status(200)
                    .json({ data: req.body }) 
                } else if (data == 0) {
                    next(err) 
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = FancyTodo