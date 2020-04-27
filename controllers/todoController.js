'use strict'

const Model = require('../models');
const Todo = Model.Todo;
const User = Model.User;

class TodoController {
    
    static findAll(req, res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({msg: data});
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({msg: data});
            })
            .catch(err => {
                res.status(404).json({error: `Not Found`});
            });
    }

    static create(req, res) {
        const {title, description, status, due_date} = req.body;
        Todo.create({
            title, 
            description, 
            status, 
            due_date: new Date(due_date)
        })
            .then(data => {
                res.status(201).json({msg: data});
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const {title, description, status, due_date} = req.body;
        Todo.update({
            title,
            description,
            status,
            due_date: new Date(due_date)
        }, {
            where: {
                id : id
            },
            returning: true
        })
            .then(data => {
                res.status(200).json({msg: data});
            })
            .catch(err => {
                res.status(500).json({error: err});
            })
    }

    static delete(req, res) {
        const id = Number(req.params.id);
        let deleteTodo;
        Todo.findByPk(id)
            .then(value => {
                deleteTodo = value;
                return Todo.destroy({
                    where: {
                        id : id
                    }
                })
            })
            .then(data => {
                if (deleteTodo) {
                    res.status(200).json({deleteTodo});
                }
                else {
                    res.status(404).json({error: `Not Found`});
                }
            })
            .catch(err => {
                res.status(500).json({error: err});
            })
    }
}

module.exports = TodoController;