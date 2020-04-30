const {Todo, User} = require('../models')
const getWeather = require('../helpers/weather')

class TodoController {
    static findAll(req, res, next){
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
                if (data){
                    res.status(200).json({
                        Todos : data,
                        Weather : result
                    })
                } else {
                    return next({
                        code : 404,
                        msg : "Data Not Found",
                        type : "Not Found"
                    })
                }
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
            
    }
    static create(req, res, next){
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
                if (result){
                    res.status(201).json({
                        Todos : result
                    })
                } else {
                    return next({
                        code : 404,
                        msg : "Data Not Found",
                        type : "Not Found"
                    })
                }
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
    }
    static findOne(req, res, next){
        const {id} = req.params
        Todo.findOne({
                where : {
                    id : parseInt(id),
                }
            })
            .then(data => {
                if (data){
                    res.status(200).json({
                        Todos : data,
                    })
                } else {
                    return next({
                        code : 404,
                        msg : "Data Not Found",
                        type : "Not Found"
                    })
                }
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
    }
    static Update(req, res, next){
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
                if(result){
                    res.status(201).json({
                        Todos : result
                    })
                } else {
                    return next({
                        code : 304,
                        msg : "Cannot Modified, You are not authorized to change the file",
                        type : "Not Modified"
                    })
                }
            })
            .catch(err => {
                if(err.name){
                    return next(err)
                } else {
                    return next({
                        code : 500,
                        msg : "Something Went Wrong",
                        type : "Internal Server Error"
                    })
                }
            })
    }
    static delete(req, res, next){
        const {id} = req.params
        Todo
            .destroy({
                where : {
                    id : id,
                }
            })
            .then(result => {
                if(result){
                    res.status(202).json({
                        msg : `Completely Destroy Todo ${id}`
                    })
                } else {
                    return next({
                        code : 403,
                        msg : "You Doesn't allow to delete this file",
                        type : "Forbidden"
                    })
                }
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                })
            })
    }
}

module.exports = TodoController