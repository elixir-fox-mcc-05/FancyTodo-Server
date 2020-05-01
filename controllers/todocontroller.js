'use strict';

const { Todo } = require(`../models`)
const { Op } = require("sequelize");

class TodoController {

    static create( req, res) {
        const { title, description, status, due_date } = req.body
        let newTodo = { title, description, status, due_date, UserId : req.UserId }
        Todo.create(newTodo)
            .then (result => {
                res.status(201).json({
                    Todo : result
                });
            })
            .catch ( err => {
                res.status(500).json({
                    Error : err.message
                });
            })
    }

    static getTodos ( req, res) {
        Todo.findAll({
            where : {
                UserId : req.UserId
            },
            order : [
                [`due_date`, `asc`]
            ]
        })
        .then (result => {
            for(let i = 0; i < result.length; i++) {
            if(result[i].due_date < new Date() && result[i].status !== `completed`){
                    Todo.update({
                        status : `expired`
                    }, {
                        where : {
                            id : result[i].id,
                            status : {
                                [Op.not] : `completed`
                            }
                        }
                    }).catch(err=> {
                        console.log(err)
                        res.status(500).json({
                            message : err
                        })
                    });
                    result[i].status = `expired`
                }
            }
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
                id : Number(req.params.id),
                UserId : req.UserId
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
        const { title, description, status, due_date} = req.body
        Todo.update({
            title,
            description,
            status,
            due_date
        }, {
            where : {
                id : Number(req.params.id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                throw Error = `invalid UserId`
            }
        })
        .catch ( err => {
            res.status(501).json({
                err
            });
        })
    }

    static  deleteTodo ( req, res) {
        Todo.destroy({
            where : {
                id : Number(req.params.id),
                UserId : req.UserId
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

    static setActive ( req, res) {
        const { id } = req.params
        Todo.update({
            status : `active`
        }, {
            where : {
                id : Number(id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                res.status(401).json({
                    message : `invalid request`
                })
            }
        })
        .catch ( err => {
            res.status(501).json({
                err
            });
        })
    }

    static setQueue ( req, res) {
        const { id } = req.params
        Todo.update({
            status : `queued`
        }, {
            where : {
                id : Number(id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                res.status(401).json({
                    message : `invalid request`
                })
            }
        })
        .catch ( err => {
            res.status(501).json({
                err
            });
        })
    }

    static setComplete ( req, res) {
        const { id } = req.params
        Todo.update({
            status : `completed`
        }, {
            where : {
                id : Number(id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                res.status(401).json({
                    message : `invalid request`
                })
            }
        })
        .catch ( err => {
            res.status(501).json({
                err
            });
        })
    }
}
module.exports = TodoController;