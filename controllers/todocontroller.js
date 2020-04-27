'use strict';

const { Todo } = require(`../models`)

class TodoController {

    static create( req, res) {
        const { title, description, status, due_date } = req.body
        let newTodo = { title, description, status, due_date, UserId : 1 }
        Todo.create(newTodo)
            .then (result => {
                res.status(201).json({
                    Todo : result
                });
            })
            .catch ( err => {
                res.status(500).json({
                    Error : err
                });
            })
    }

    static getTodos ( req, res) {
        Todo.findAll({})
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static getOneTodo ( req, res) {
        Todo.findOne({
            where : {
                id : Number(req.params.id)
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static updateTodo ( req, res) {
        const { title, description, status } = req.body
        Todo.update({
            title,
            description,
            status
        }, {
            where : {
                id : Number(req.params.id)
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static  deleteTodo ( req, res) {
        Todo.destroy({
            where : {
                id : Number(req.params.id)
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }
}
module.exports = TodoController;