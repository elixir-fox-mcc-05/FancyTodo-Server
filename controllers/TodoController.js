const {Todo} = require('../models');

class TodoController{
    static showAll(req, res, next){
        const id = req.userId;
        const option = {
            where: {UserId: id, ProjectId: null},
            order: [['id', 'ASC']]
        }
        Todo.findAll(option)
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
    static showById(req, res, next){
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
    static create(req, res, next){
        const {title, description, due_date} = req.body;
        const UserId = req.userId;
        const todo = {
            title,
            description,
            due_date,
            UserId
        }
        Todo.create(todo)
            .then(response => {
                res.status(201).json(response);
            })
            .catch(err => {
                if(err.errors){
                    let errorMsg = err.errors.map(error => {
                        return error.message;
                    })
                    res.status(400).json({
                        message: errorMsg
                    })
                }else{
                    res.status(500).json({
                        message: err.message
                    })
                }
            })
    }
    static update(req, res, next){
        const {id} = req.params;
        const {title, description, status, due_date} = req.body;
        const newTodo = {
            title,
            description,
            status,
            due_date
        }
        const option = {
            where: {id},
            returning: true
        }
        Todo.update(newTodo,option)
                    .then(updated => {
                        if(!updated[0]){
                            res.status(404).json({
                                message: 'Id Not Found'
                            })
                        }else{
                            res.status(200).json(updated[1]);
                        }
                    })
                    .catch(err => {
                        if(err.errors){
                            let errorMsg = err.errors.map(error => {
                                return error.message;
                            })
                            res.status(400).json({
                                message: errorMsg
                            })
                        }else{
                            res.status(500).json({
                                message: err.message
                            })
                        }
                    })
    }
    static delete(req, res, next){
        const {id} = req.params;
        const option = {
            where: {id}
        }
        let deleted;
        Todo.findByPk(id)
            .then(response => {
                if(!response){
                    res.status(404).json({
                        message: 'Id Not Found'
                    })
                }else{
                    deleted = response;
                    return Todo.destroy(option);
                }
            })
            .then(() => {
                res.status(200).json(deleted);
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
    }
}

module.exports = TodoController