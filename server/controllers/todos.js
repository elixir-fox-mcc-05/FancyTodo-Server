const { Todo } = require('../models')

class Controller {

    static create(req, res) {
        const options = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.UserId
        }
        Todo
            .create(options)
            .then(data => res.status(201).json({ data }))
            .catch(err => res.status(500).json({ error: err }))
    }

    static findAll(req, res) {
        const options = {
            order: [['id', 'ASC']]
        }
        Todo
            .findAll(options)
            .then(data => res.status(200).json({ data }))
            .catch(err => res.status(500).json({ error: err }))
    }

    static findOne(req, res) {
        const options = {
            where: { id: req.params.id }
        }
        Todo
            .findOne(options)
            .then(data => {
                if (data) {
                    res.status(200).json({ data })
                } else {
                    res.status(404).json({ name: 'empty' })
                }
            })
            .catch(err => res.status(500).json({ error: err }))
    }

    static update(req, res) {
        const options = {
            where: { id: req.params.id }
        }

        let selected = null

        Todo
            .findOne(options)
            .then(data => {
                if (data == null) {
                    throw ({ name: 'empty' })
                } else {
                    selected = data
                    return Todo.update({
                        title: req.body.title,
                        description: req.body.description,
                        due_date: req.body.due_date
                    }, {
                        where: { id: req.params.id }
                    })
                }
            })
            .then(() => { res.status(200).json({ selected }) })
            .catch(err => res.status(500).json({ error: err }))
    }

    static destroy(req, res) {
        const options = {
            where: {
                id: req.params.id
            }
        }
        Todo
            .destroy(options)
            .then(data => {
                if (data == 0) {
                    throw ({ name: 'empty' })
                }
                else res.status(200).json({ message: `Delete data ${req.params.id} Success` })
            })
            .catch(err => res.status(500).json({ error: err }))
    }
}

module.exports = Controller