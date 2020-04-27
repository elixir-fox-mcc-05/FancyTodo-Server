'use strict'

const Model = require('../models');
const Todo = Model.Todo;

class TodoController {
    
    static findAll(req, res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({data: data});
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({data: data});
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
    }
}

module.exports = TodoController;