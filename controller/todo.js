const Model = require('../models')
const Todo = Model.Todo

class TodoController {
    static findAll(req, res, next) {
        const userId = req.userId
        Todo.findAll({where : {userId : userId}})
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                next(err)
            })
    }
    
    static findById(req, res, next) {
        const { id } = req.params

        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res, next) {
        const { title, description, status, due_date } = req.body
        const userId = req.userId
        Todo.create({
            title,
            description,
            status,
            due_date,
            userId
        })
        
            .then( data => {
                res.status(201).json({ todo : data })
            } )
            .catch(err => {
                next(err)
            })
    }

    static delete (req, res, next) {
        let { id } = req.params

        Todo.destroy({where : {id}})
            .then(data => {
                res.status(200).json({ msg : `Todo ${id} successfully deleted!` })
            })
            .catch(err => {
                next(err)
            })
    }

    static edit (req, res, next) {
        const { title, description, status, due_date } = req.body
        const { id } = req.params

        Todo.update({title, description, status, due_date}, {where: {id}, returning : true})

            .then(song => {
                res.status(200).json({song, msg : `todo ${id} succesfully update!`})
            })
            .catch(err => {
                next(err)
            })
    }

}



module.exports = TodoController;