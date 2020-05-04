const { Todo } = require('../models')
const axios = require('axios')
const API_KEY = process.env.API_KEY

class TodoController{
    static showAll(req, res, next){
        let UserId = req.userId
        Todo.findAll({where: {UserId}})
            .then(data => {
                res.status(200).json({
                    todos:data
                })
            })
            .catch(err => {
                next(err)
            })
    }
    
    static create(req, res, next){
        let { title, description, status, due_date } = req.body
        let UserId = req.userId
        Todo.create({
            title,
            description,
            status: false,
            due_date,
            UserId
        })
            .then(data => {
                res.status(201).json({
                    todo: data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById(req, res, next){
        let { id } = req.params
        let UserId = req.userId
        let recommendation = []

        axios.get('https://developers.zomato.com/api/v2.1/collections?city_id=74', {
            headers: {
                "user-key" : API_KEY,

            }
        })
            .then(response => {
                for (let i = 0; i < response.data.collections.length; i++) {
                    let temp = {
                        title: response.data.collections[i].collection.title,
                        description: response.data.collections[i].collection.description,
                        url: response.data.collections[i].collection.url
                    }
                    recommendation.push(temp)
                }
                return Todo.findOne({where: {UserId,id}})
            })       
            .then(data => {
                if(data){
                    let activity = ['makan', 'dinner', 'nongkrong', 'hangout']
                    for (let i = 0; i < activity.length; i++) {
                        if(data.title.toLowerCase() == activity[i]){
                            res.status(200).json({
                                Todo: data,
                                recommendations: recommendation
                            })
                        } 
                    }
                    res.status(200).json({
                        Todo: data
                    })
                } else {
                    throw{
                        msg: `data not found`,
                        code: 404
                    }
                }

            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next){
        let { id } = req.params
        let { title, description, status, due_date } = req.body
        let newData = {
            title,
            description,
            status,
            due_date
        }
        Todo.update(newData, {
            where:{id}, 
            returning: true 
        })
            .then(data => {
                if(data){
                    res.status(200).json({
                        todo: data
                    })
                } else {
                    throw{
                        error: `data not found`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err) 
            })
    }

    static delete(req, res, next){
        let { id } = req.params
        Todo.destroy({where:{id}})
            .then(data => {
                if(data){             
                    res.status(200).json({
                        Success: `Success delete data with id ${id}`
                    })
                } else { 
                    res.status(404).json({
                        error: `data not found`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })
    }
}

module.exports = TodoController