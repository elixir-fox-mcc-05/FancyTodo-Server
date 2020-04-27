const {Todo} = require('../models');

class TodoController{
    static showAll(req, res){
        Todo.findAll()
            .then(response => {
                res.status(200).json({
                    todos: response
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    }
    static showById(req, res){
        const {id} = req.params;
        Todo.findByPk(id)
            .then(response => {
                if(!response){
                    res.status(404).json({
                        message: 'Id Not Found'
                    })
                }
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    }
    static create(req, res){

    }
    static update(req, res){

    }
    static delete(req, res){

    }
}

module.exports = TodoController