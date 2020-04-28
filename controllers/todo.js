const { Todo, User } = require('../models')

class FancyTodo {
    static add(req, res) {
        const { UserId } = req
        const { title, description, status, due_date } = req.body
        Todo.create({ title, description, status, due_date, UserId })
            .then(data => {
                res
                  .status(201)
                  .json({ new_data: data }) 
            })
            .catch(err => { 
                if (err.name == 'SequelizeValidationError') {
                    res
                      .status(400)
                      .json({ err })
                } else {
                    res
                      .status(500)
                      .json({ 
                        name: 'InternalServerError',  
                        msg: 'status code 500' })
                }
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
                        // res
                        //   .status(404)
                        //   .json({ msg: 'NOT FOUND' })
                        next(err)
                    }
                })
                .catch(err => { 
                    // res
                    //   .status(500)
                    //   .json({ msg: 'status code 500' })
                    next(err)
                })
        } else {
            res
              .status(404)
              .json({ msg: 'NOT FOUND' })
        }
    }

    static show_id(req, res) {
        const { UserId } = req
        const { id } = req.params
        Todo.findOne({ where: { id, UserId } })
            .then(data => { 
                if (data) {
                    res
                      .status(200)
                      .json({ data }) 
                } else {
                    res
                      .status(404)
                      .json({ msg: 'NOT FOUND' })
                }
        })
    }

    static delete(req, res) {
        const { UserId } = req
        const { id } = req.params
        Todo.destroy({ where: { id, UserId } })
            .then(data => {
                if (data) {
                    res
                      .status(204)
                      .json({ msg: `success delete with id ${id}` })
                } else {
                    res
                      .status(404)
                      .json({ msg: `NOT FOUND` })
                }
            })
            .catch(err => { 
                res
                  .status(500)
                  .json({ msg: err })
        })
    }

    static edit(req, res, next) {
        const { UserId } = req
        const { id } = req.params
        const { title, description, status, due_date } = req.body
        Todo.update({ title, description, status, due_date }, { where: { id, UserId } })
            .then(data => { 
                if (data != 0) {
                    res
                    .status(200)
                    .json({ data: req.body }) 
                } else if (data == 0) {
                    res
                    .status(404)
                    .json({ msg: 'NOT FOUND' })
                }
                next() 
            })
            .catch(err => {
                if (err == undefined) {
                    res
                      .status(400)
                      .json({ msg: `Invalid Input` })
                } else if (err.name == 'jwt must be provided') {
                    res
                      .status(404)
                      .json({ msg: 'NOT FOUND' })
                } else {
                    res
                    .status(500)
                    .json({ err: err.message }) 
                }
            })
    }
}

module.exports = FancyTodo