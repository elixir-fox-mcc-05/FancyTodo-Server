"use strict"

const Model = require("../models/index.js");

const Todo = Model.Todo;

class ControllerTodo{
    static showTodo(req, res){
        const UserId = req.currentUserId;
        
        Todo
            .findAll({
                where: {
                    UserId
                }
            })
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(err => {
                next(err);
                // res.status(500).json({
                //     err: "Internal server error"
                // });
            })
    }
    static addTodo(req, res){
        const {title, description, status, due_date} = req.body;
        const UserId = req.currentUserId
        
        Todo
            .create({
                title,
                description,
                status,
                due_date,
                UserId
            })
            .then(result => {
                res.status(201).json({
                    todo: result
                });
            })
            .catch(err => {
                next(err);
                // res.status(500).json({
                //     err: "Internal server error"
                // });
            })
    }
    static findTodo(req, res){
        const UserId = req.currentUserId;
        
        Todo
            .findOne({
                where: {
                UserId
                }
            })
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(err => {
                next(err);
                // res.status(500).json({
                //     err: "Internal server error"
                // });
            })
    }
    static deleteTodo(req, res){
        const UserId = req.currentUserId;

        Todo
            .destroy({
                where: {
                UserId
                }
            })
            .then(todo => {
                res.status(200).json({
                    msg: "todo deleted",
                    todo
                });
            })
            .catch(err => {
                next(err);
                // res.status(500).json({
                //     err: "Internal server error"
                // });
            })
    }
    static updateTodo(req, res){
        const {id} = req.params;
        const updatedTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo
            .update(updatedTodo, 
            {
                where: {
                id
                },
                returning: true
            })
            .then(result => {
                res.status(201).json({
                    msg: "todo updated",
                    todo: result
                });
            })
            .catch(err => {
                next(err);
                // res.status(500).json({
                //     err: "Internal server error"
                // });
            })
    }
}

module.exports = ControllerTodo;