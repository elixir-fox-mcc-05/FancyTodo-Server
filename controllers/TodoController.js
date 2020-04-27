"use strict"

const { Todo } = require('../models')

class TodoController {

    static read(req, res) {
        Todo.findAll({
            order : [['id', 'ASC']]
        })
            .then(todos => {
                res.status(200).json({ todos })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static findById(req, res) {
        const { id } = req.params
        Todo.findByPk(id)
            .then(todo => {
                if (todo) {
                    res.status(200).json({ todo })
                } else {
                    res.status(404).json({
                        msg: `todo with id ${id} not found`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static create(req, res) {
        const { title, description, status, due_date } = req.body;
        Todo.create({
            title,
            description,
            status,
            due_date
        })
            .then(todo => {
                res.status(201).json({ todo })
            })
            .catch(err => {
                if (err.name == 'SequelizeValidationError') {
                    res.status(400).json({
                        error: err.message
                    })
                } else {
                    res.status(500).json({
                        error: err
                    })
                }
            })
    }

    static delete(req, res) {
        const { id } = req.params
        Todo.destroy({
            where: { id }
        })
            .then(todo => {
                if (todo) {
                    res.status(200).json({
                        msg: `Todo with id ${id} successfully deleted`
                    })
                } else {
                    res.status(404).json({
                        msg: `Todo with id ${id} not found`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }

    static update(req, res) {
        const { title, description, status, due_date } = req.body;
        const { id } = req.params;

        Todo.update({
            title: title,
            description: description,
            status: status,
            due_date: due_date
        }, {
            where: { id }
        })
            .then(todo => {
                if (todo != 0) {
                    res.status(200).json({ todo })
                } else {
                    res.status(404).json({
                        msg: `todo with id ${id} not found`
                    })
                }
            })
            .catch(err => {
                if (err.name == 'SequelizeValidationError') {
                    res.status(400).json({
                        error: err.message
                    })
                } else {
                    res.status(500).json({
                        error: 'internal server error'
                    })
                }
            })
    }
}

module.exports = TodoController;