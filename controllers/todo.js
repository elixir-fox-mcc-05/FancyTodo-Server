const { Todo } = require('../models')
const get_token = require('../helpers/jwt')

class FancyTodo {
    static add(req, res) {
        const { title, description, status, due_date } = req.body
        Todo.create({ title, description, status, due_date })
        .then(data => { 
            let token = get_token(req.body)
                res
                  .status(201)
                  .json({ new_data: token }) 
            })
            .catch(err => { 
                res.status(400).json({ err: err.message})
                if (err.message) {
                    res
                      .status(400)
                      .json({ msg: 'invalid input' })
                } else {
                    res
                      .status(500)
                      .json({ msg: 'status code 500' })
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
                    res.status(204).json({
                    status: `Success deleted with id ${id}`
                    })
                } else {
                    res.status(404).json({
                        msg: `NOT FOUND`
                    })
                }
            })
            .catch(err => { 
                res
                  .status(500)
                  .json({ msg: 'status code 500' })
        })
    }

    static edit(req, res) {
        const { id } = req.params
        const { title, description, status, due_date } = req.body
        Todo.findByPk(id)
            .then(data => {
                if (data) {
                    Todo.update({ title, description, status, due_date })
                        .then(data => { 
                            res
                              .status(200)
                              .json({ data }) 
                        })
                        .catch(err => {
                            res
                              .status(400)
                              .json({ msg: `validation error` })
                        })
                } else {
                    res
                      .status(404)
                      .json({ msg: 'NOT FOUND' })
                }
            })
            .catch(err => {
                res
                  .status(500)
                  .json({ msg: 'status code 500' }) 
            })
    }
}

module.exports = FancyTodo