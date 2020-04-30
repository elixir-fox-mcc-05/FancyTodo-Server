const { Todo } = require('../models')

class TodoController {
    static create(req, res) {
        let { title, description, due_date } = req.body
        const { currentUserId } = req
        due_date = new Date(due_date)

        Todo.create({
            title,
            description,
            due_date,
            UserId: currentUserId
        })
        .then(result => {
            res.status(201).json({
                Todo: result
            })
        })
        .catch(error => {
            res.status(500).json({
                error,
                msg: 'Mohon maaf, untuk saat ini layanan sedang tidak tersedia'
            })
        })
    }

    static findAll(req, res) {
        Todo.findAll({
            where: {
                UserId: req.currentUserId
            },
            order: [
                ['due_date', 'ASC']
            ]
        })
            .then(results => {
                res.status(200).json({
                    Todos: results
                })
            })
            .catch(error => {
                res.status(500).json({
                    error,
                    msg: 'Mohon maaf, untuk saat ini layanan sedang tidak tersedia'
                })
            })
    }

    static findById(req, res) {
        const { id } = req.params

        Todo.findByPk(id)
            .then(result => {
                res.status(200).json({
                    Todo: result
                })
            })
            .catch(error => {
                res.status(404).json({
                    error,
                    msg: `Todo dengan id ${id} tidak ditemukan`
                })
            })
    }

    static update(req, res) {
        const { id } = req.params
        let { title, description, due_date } = req.body
        if (due_date) due_date = new Date(due_date)

        Todo.findByPk(+id)
            .then(todo => {                
                if (!title) title = todo.title;
                if (!description) description = todo.description; 
                if (!due_date) due_date = todo.due_date;

                Todo.update({
                    title,
                    description,
                    due_date
                }, {
                    where: { id },
                    returning: true // return the updated instance
                })
                .then(updated => {
                    res.status(200).json({
                        msg: `Todo dengan id ${id} telah berhasil diubah`
                    })
                })
                .catch(error => {
                    res.status(404).json({
                        error,
                        msg: `Todo dengan id ${id} tidak ditemukan`
                    })
                })
            })
            .catch(error => {
                res.status(404).json({
                    msg: `Todo dengan id ${id} tidak ditemukan`
                })
            })       
    }

    static destroy(req, res) {
        const { id } = req.params

        Todo.destroy({
            where: { id }
        })
        .then(() => {
            res.status(200).json({
                msg: `Todo dengan id ${id} telah berhasil dihapus`
            })
        })
        .catch(error => {
            res.status(404).json({
                error,
                msg: `Todo dengan id ${id} tidak ditemukan`
            })
        })
    }
}

module.exports = TodoController