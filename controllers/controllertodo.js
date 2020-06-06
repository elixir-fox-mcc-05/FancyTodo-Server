"use strict"

const Model = require("../models/index.js");

const Todo = Model.Todo;

class ControllerTodo{
    static showTodo(req, res, next){
        const UserId = req.currentUserId;
        
        Todo
            .findAll({
                where: {
                    UserId
                }
            })
            .then(todos => {
                res.status(200).json({todos});
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static addTodo(req, res, next){
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
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static findTodo(req, res, next){
        const {id} = req.params;
        
        Todo
            .findOne({
                where: {
                id
                }
            })
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static deleteTodo(req, res, next){
        const {id} = req.params;

        Todo
            .destroy({
                where: {
                id
                }
            })
            .then(todo => {
                res.status(200).json({
                    msg: "todo deleted",
                    todo
                });
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static updateTodo(req, res, next){
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
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
}

module.exports = ControllerTodo;