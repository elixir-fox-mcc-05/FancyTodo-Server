let { Todo, User } = require('../models/index')

class ControllerTodo {
    static show (req, res) {
        Todo.findAll({
            where: {
                UserId : req.currentUserId
            }
        })
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
            UserId: req.currentUserId
        }
        console.log(req.currentUserId);
        Todo.create(data)
        .then(data => {
            res.status(201).json({
                Todo : data
            })  
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: 'server error',
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
        {   
            where : {
                id : req.params.id
            },
            returning: true
        })
        .then((result) => {
            result = result[1][0]
            console.log(result);
            if (result) {
                res.status(200).json({
                    title: result.title,
                    description: result.description,
                    status: result.status,
                    due_date: result.due_date
                })
            }
            else {
                res.status(404).json({
                    msg : 'id Not Found'
                })
            }
        })
        .catch(err => {
            console.log(err);
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