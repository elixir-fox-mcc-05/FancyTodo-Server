const Model = require("../models");
const ToDo = Model.ToDo;

class ToDoController {

    static create (req, res) {

        let values = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }

        ToDo
            .create(values)
            .then(data => {
                res.status(201).json({
                    CreatedToDo : data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }
        
    static findAll (req, res) {

        let options = {};

        ToDo
            .findAll(options)
            .then(data => {
                res.status(200).json({
                    ToDos : data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }

    static findById (req, res) {

        let param = req.params.id

        ToDo
            .findByPk(param)
            .then(data => {
                res.status(200).json({
                    ToDoById : data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }

    static putById (req, res) {

        let values = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }

        let options = {
            where : { 
                id : req.params.id
            }
        }

        ToDo
            .update(values, options)
            .then(data => {
                return ToDo.findOne(options)
            })            
            .then(data => {
                res.status(200).json({
                    UpdatedToDo : data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }

    static deleteById (req, res) {

        let options = {
            where : {
                id : req.params.id
            }
        }

        let choosed = null;

        ToDo
            .findOne(options)
            .then(data => {
                choosed = data
                return ToDo.destroy(options)
            })
            .then(data => {
                res.status(200).json({
                    DeletedToDo : choosed
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }
}

module.exports = ToDoController;