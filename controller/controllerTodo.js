const {Todo, User} = require('../models')
const getWeather = require('../helpers/weather')

class TodoController {
    static findAll(req, res){
        const UserId = req.currentUser
        let result; 
        getWeather()
            .then(data => {
                result = data.data
                return Todo.findAll({
                    where : {
                            UserId,
                    }
                })
            })
            .then(data => {
                res.status(200).json({
                    Todos : data,
                    Weather : result
                })
            })
            .catch(err => {
                next(err)
            })
            
    }
    static create(req, res){
        const {title, description, due_date} = req.body
        const UserId = req.currentUser
        const values = {
            title,
            description,
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
                next(err)
            })
    }
    static findOne(req, res){
        const {id} = req.params
        Todo.findOne({
                where : {
                    id : parseInt(id),
                }
            })
            .then(data => {
                res.status(200).json({
                    Todos : data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    static Update(req, res){
        const {title, description, status, due_date} = req.body
        const {id} = req.params
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
                }
            })
            .then(result => {
                res.status(201).json({
                    Todos : result
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res){
        const {id} = req.params
        Todo
            .destroy({
                where : {
                    id : id,
                }
            })
            .then(result => {
                res.status(202).json({
                    msg : `Completely Destroy Todo ${id}`
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TodoController