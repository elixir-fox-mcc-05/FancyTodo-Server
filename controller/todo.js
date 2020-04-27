const Model = require('../models')
const Todo = Model.Todo

class TodoController {
    static findAll(req, res) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    }
    
    static findById(req, res) {
        const { id } = req.params

        Todo.findByPk(id)
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                res.status(404).json({error : err})
            })
    }

    static create(req, res) {
        const { title, description, status, due_date } = req.body
        Todo.create({
            title,
            description,
            status,
            due_date
        })
            .then( data => {
                res.status(201).json({ todo : data })
            } )
            .catch(err => {
                res.status(500).json({ error : err })
            })
    }

    static delete (req, res) {
        let { id } = req.params

        Todo.destroy({where : {id}})
            .then(data => {
                res.status(200).json({ msg : `Todo ${id} successfully deleted!` })
            })
            .catch(err => {
                res.status(500).json({ error : err })
            })
    }

    static edit (req, res) {
        const { title, description, status, due_date } = req.body
        const { id } = req.params

        Todo.update({title, description, status, due_date}, {where: {id}})

            .then(data => {
                res.status(200).json({data, msg : `todo ${id} succesfully update!`})
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}



module.exports = TodoController;