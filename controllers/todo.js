let { Todo, User } = require('../models/index')

class ControllerTodo {
    static show (req, res) {
        Todo.findAll()
        .then(data => {
            res.status(200).json({
                Todo : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static create (req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.body.UserId
        }
        Todo.create(data)
        .then(data => {
            res.status(201).json({
                Todo : data
            })  
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static edit (req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.body.UserId
        }
        Todo.update(data, 
        {   where : {
            id : req.params.id
            }
        })
        .then((result) => {
            if (title && description && status && due_date && result) {
                res.status(200).json({
                    title: req.body.title,
                    description: req.body.description,
                    status: req.body.status,
                    due_date: req.body.due_date
                })
            }
            else if(!result) {
                res.status(404).json({
                    msg : 'id Not Found'
                })
            }
            else if(!title || !description || !status || !due_date) {
                res.status(400).json({
                    msg : 'Validation error'
                })
            }
            else {
                res.status(500).json({
                    msg : 'server error'
                })
            }
            
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static delete (req, res) {
        Todo.destroy({ where : {
            id : req.params.id
        }})
        .then(data => {
            if(!data) {
                res.status(404).json({
                    msg : 'id Not Found'
                })
            } else {
                res.status(201).json({
                    msg : `data with id ${req.params.id} deleted`
                })  
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }
}

module.exports = ControllerTodo