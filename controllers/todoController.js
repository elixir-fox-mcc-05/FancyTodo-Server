const Model = require("../models");
const ToDo = Model.ToDo;

class ToDoController {

    static create (req, res, next) {

        let values = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId : req.loggedInUserId
        }

        ToDo
            .create(values)
            .then(data => {
                res.status(201).json({
                    CreatedToDo : data
                })
            })
            .catch(err => {
                next(err)
            })
    }
        
    static findAll (req, res, next) {

        let options = {
            where : {
                UserId : req.loggedInUserId
            }
        };

        ToDo
            .findAll(options)
            .then(data => {
                res.status(200).json({
                    ToDos : data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById (req, res, next) {

        let param = req.params.id

        ToDo
            .findByPk(param)
            .then(data => {
                res.status(200).json({
                    ToDoById : data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static putById (req, res, next) {

        let values = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }

        let options = {
            where : { 
                id : req.params.id,
            },
            returning : true
        }

        ToDo
            .update(values, options)
            .then(data => {
                res.status(200).json({
                    UpdatedToDo : data[1][0]
                })
            })            
            .catch(err => {
                next(err)
            })
    }

    static deleteById (req, res, next) {

        let options = {
            where : {
                id : req.params.id
            }
        }

        let choosed = null;

        ToDo
            .findOne(options)
            .then(data => {
                    return ToDo.destroy(options)
            })
            .then(data => {
                res.status(200).json({
                    DeletedToDo : choosed
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ToDoController;