'use strict'

const Model = require('../models');
const Todo = Model.Todo;

class TodoController {
    
    static findAll(req, res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            });
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        Todo.findByPk(id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            });
    }

    static create(req, res) {
        const {title, description, status, due_date} = req.body;
        const UserId = req.UserId;
        Todo.create({
            title, 
            description, 
            status, 
            due_date: new Date(due_date),
            UserId
        })
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                next(err);
            });
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const {title, description, status, due_date} = req.body;
        Todo.update({
            title,
            description,
            status,
            due_date: new Date(due_date),
        }, {
            where: {
                id : id
            },
            returning: true
        })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
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
                    res.status(200).json(`Succesfully delete Todo ${id}`);
                }
                else {
                    throw {
                        msg: `Not found`,
                        code: 404
                    };
                }
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = TodoController;