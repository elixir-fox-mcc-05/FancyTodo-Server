const {Todo, User} = require('../models')

class TodoController {
    static findAll(req, res){
        const UserId = req.currentUser
        Todo
            .findAll({
                where : {
                    UserId,
                }
            })
            .then(result => {
                res.status(200).json({
                    Todos : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error: "Error Acces Server"
                })
            })
    }
    static create(req, res){
        const {title, description, status, due_date} = req.body
        const UserId = req.currentUser
        const values = {
            title,
            description,
            status,
            due_date,
            UserId
        }
        Todo
            .create(values)
            .then(result => {
                res.status(201).json({
                    Todos : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : "Error Creating Data"
                })
            })
    }
    static findOne(req, res){
        const {id} = req.params
        const UserId = req.currentUser
        console.log(id, UserId)
        Todo
            .findOne({
                where : {
                    id : parseInt(id),
                    UserId : UserId
                }
            })
            .then(result => {
                res.status(200).json({
                    Todos : result
                })
            })
            .catch(err => {
                res.status(404).json({
                    Error : "Not Found"
                })
            })
    }
    static Update(req, res){
        const { title, description, status, due_date} = req.body
        const {id} = req.params
        const UserId = req.currentUser
        const values = {
            title,
            description,
            status,
            due_date
        }
        Todo
            .update(values, {
                where : {
                    id : id,
                    UserId, 
                }
            })
            .then(result => {
                res.status(201).json({
                    Todos : result
                })
            })
            .catch(err => {
                res.status(304).json({
                    Error : "Not Modified"
                })
            })
    }
    static delete(req, res){
        const {id} = req.params
        const UserId = req.currentUser
        Todo
            .destroy({
                where : {
                    id : id,
                    UserId
                }
            })
            .then(result => {
                res.status(202).json({
                    msg : `Completely Destroy Todo ${id}`
                })
            })
            .catch(err => {
                res.status(501).json({
                    Error : "Not Implemented"
                })
            })
    }
}

module.exports = TodoController