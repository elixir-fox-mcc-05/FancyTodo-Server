const {Todo}= require('../models')

class TodoController {
    static create(req, res, next){
        const newTodo = {
            title : req.body.title,
            description : req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.currentUserId
        }
        Todo.create(newTodo)
        .then(result => {
            return res.status(201).json({
                msg: "New todo successfully created",
                result
            })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        })
    }

    static findAll(req, res, next){
        let UserId = req.currentUserId
        Todo.findAll({
            where: {
                UserId
            },
            order: [['due_date', 'ASC']]
        })
        .then(result => {
            return res.status(200).json({
                result
            })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        })
    }
    
    static findOne(req, res, next){
        const id = req.params.id
        Todo.findByPk(id)
        .then(result => {
            if(result) {
                return res.status(200).json({
                    result
                })
            }
            else {
                return res.status(404).json({
                    name: "Not Found",
                    errors: [{message: "Todo not found"}]
                })
            }
        })
        .catch(err => {
            console.log(err);
            return next(err)
        })
    }

    static update( req, res, next){
        const id = +req.params.id
        const updateTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : new Date (req.body.due_date)
        }
        Todo.update(updateTodo, {
            where : {
                id
            },
            returning: true
        }, )
        .then(result => {
            return  res.status(200).json(
                result[1][0]
            )
        })
        .catch(err => {
            console.log(err);
            
            return next(err)
        }) 
    }

    static todoDone( req, res, next){
        const id = +req.params.id
        Todo.findByPk(id)
        .then(todo => {
            if(todo){
                let updateTodo = {
                    status : true
                }
                return Todo.update(updateTodo, {
                    where: {
                        id
                    }
                })
            }
            else {
                return res.status(404).json({
                    msg: "Not Found",
                })
            }
            
        })
        .then(result => {
            return res.status(200).json({
                msg: "Todo successfully updated"
            })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        })

    }

    static delete( req, res, next){
        Todo.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            return res.status(201).json({
                msg: "Successfully deleted todo",
            })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        })
    }
}

module.exports = TodoController