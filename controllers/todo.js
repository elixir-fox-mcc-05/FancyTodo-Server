const { Todo } = require("../models")


class Controller {
    static findAll(req, res) 
    {
        Todo.findAll()
            .then(data => res.status(200).json({
                todos: data
            }))
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static add(req, res)
    {
        let { title, description, status, due_date } = req.body
        Todo.create({
            title,
            description,
            status,
            due_date
        })
            .then(data => 
                {
                    if(!data) {
                        res.status(404).json({
                        msg: "ERROR : not found"
                        })
                    } else {
                        res.status(201).json({
                        todos: data
                        })
                    }
                })
            .catch(err => {
                {
                    if(err.name == 'SequelizeValidationError') {
                        res.status(400).json({
                        error: err
                        })
                    } else {
                        res.status(500).json({
                        error: err
                        })
                    }
                }
            })
    }

    static search(req, res) 
    {
        let { id } = req.params
        Todo.findByPk(id)
            .then(data => 
                {
                    if(!data) {
                        res.status(404).json({
                        msg: "ERROR : not found"
                        })
                    } else {
                        res.status(200).json({
                        todos: data
                        })
                    }
                })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static update(req, res)
    {
        const { id } = req.params
        const { title, description, status, due_date } = req.body
        Todo.update({ title, description, status, due_date }, { where: { id } })
            .then(data => 
                {
                    Todo.findByPk(id)
                    .then(data => 
                        {
                            if(!data) {
                                res.status(404).json({
                                msg: "ERROR : not found"
                                })
                            } else {
                                res.status(200).json({
                                todos: data
                                })
                            }
                        })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        })
                    })
                })
            .catch(err => {
                {
                    if(err.name == 'SequelizeValidationError') {
                        res.status(400).json({
                        error: err
                        })
                    } else {
                        res.status(500).json({
                        error: err
                        })
                    }
                }
            })
    }

    static delete(req, res)
    {
        let { id } = req.params
        Todo.destroy({where : {id}})
            .then(data => 
                {
                    if(!data) {
                        res.status(404).json({
                        msg: "ERROR : not found"
                        })
                    } else {
                        res.status(200).json({
                        todos: data
                        })
                    }
                })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }
}

module.exports = Controller