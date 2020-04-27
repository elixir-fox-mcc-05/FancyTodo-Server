const { Todo } = require('../models')

class FancyTodo {
    static add(req, res, next) {
        const { title, description, status, due_date } = req.body
        Todo.create({ title, description, status, due_date })
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

    static show(req, res) {
        Todo.findAll()
            .then(data => { 
                res
                  .status(200)
                  .json({ data }) 
            })
            .catch(err => { 
                res
                  .status(500)
                  .json({ msg: 'status code 500' }) 
            })
    }

    static show_id(req, res) {
        const { id } = req.params
        Todo.findByPk(id)
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
        const { id } = req.params
        Todo.destroy({ where: { id } })
            .then(data => { 
                if (data) {
                    res
                      .status(204)
                      .json({ data })
                } else {
                    res
                      .status(404)
                      .json({ msg: `NOT FOUND` })
                }
            })
            .catch(err => { 
                res
                  .status(500)
                  .json({ msg: 'status code 500' })
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
                    .json({ data }) 
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
                }
                    res
                    .status(500)
                    .json({ err: err.message }) 
            })

    }
}

module.exports = FancyTodo