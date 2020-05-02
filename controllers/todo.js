let { Todo, User } = require('../models/index')
let axios = require('axios')

class ControllerTodo {
    static show (req, res) {
        Todo.findAll({
            where: {
                UserId : req.currentUserId
            },
            order: [['status', 'DESC']]
        })
        .then(data => {
            res.status(200).json({
                Todo : data
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static create (req, res, next) {
        let data = {
            title: req.body.title || '',
            description: req.body.description || '',
            status: req.body.status || '',
            due_date: req.body.due_date || '',
            UserId: req.currentUserId || ''
        }
        Todo.create(data)
        .then(data => {
            res.status(201).json({
                Todo : data
            })  
        })
        .catch(err => {
            next(err)
        })
    }

    static edit (req, res, next) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.update(data, 
        {   
            where : {
                id : req.params.id
            },
            returning: true
        })
        .then((result) => {
            result = result[1][0]
            if (result) {
                res.status(200).json({
                    title: result.title,
                    description: result.description,
                    status: result.status,
                    due_date: result.due_date
                })
            }
            else {
                throw {
                    msg : 'id Not Found',
                    code: 404
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static delete (req, res, next) {
        Todo.destroy({ where : {
            id : req.params.id
        }})
        .then(data => {
            if(!data) {
                throw {
                    msg: 'not found',
                    code: 404
                }
            } else {
                res.status(201).json({
                    msg : `data with id ${req.params.id} deleted`
                })  
            }
        })
        .catch(err => {
            next(err)
        })
    }
    static getWeather (req, res, next) {
        axios.get('http://api.weatherstack.com/current', {
            params: {
                access_key : process.env.WEATHER_API_KEY,
                query : req.params.location
            }
        })
            .then(result => {
                res.status(200).json({
                    weather : result.data
                })
            })
    }

    static findOne (req, res) {
        User.findOne({
            where: {
                id : req.currentUserId
            }
        })
        .then(data => {
            // console.log(data);
            res.status(200).json({
                result : data 
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }
}

module.exports = ControllerTodo