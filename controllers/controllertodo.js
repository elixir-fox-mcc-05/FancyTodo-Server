"use strict"

const Model = require("../models/index.js");

const Todo = Model.Todo;

class ControllerTodo{
    static showTodo(req, res){
        
        Todo
            .findAll()
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(error => {
                res.status(500).json({error});
            })
    }
    static addTodo(req, res){
        const body = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo
            .create(body)
            .then(todo => {
                res.status(201).json({todo});
            })
            .catch(error => {
                res.status(500).json({error});
            })
    }
    static findTodo(req, res){
        Todo
            .findOne({
                where: {
                id: req.params.id
                }
            })
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(error => {
                res.status(404).json({error});
            })
    }
    static deleteTodo(req, res){
        Todo
            .destroy({
                where: {
                id: req.params.id
                }
            })
            .then(todo => {
                res.status(200).json({todo});
            })
            .catch(error => {
                res.status(500).json({error});
            })
    }
    static updateTodo(req, res){
        Todo
            .update({
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                due_date: req.body.due_date
            }, 
            {
                where: {
                id: req.params.id
                }
            })
            .then(todo => {
                res.status(201).json({todo});
            })
            .catch(error => {
                res.status(500).json({error});
            })
    }
}

module.exports = ControllerTodo;