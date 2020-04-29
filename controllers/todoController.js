const { Todo } = require('../models/index.js');

class TodoController {
    // router.get('/', TodoController.readAllTodo);
    static readAllTodo(req, res, next){
        let UserId = req.currentUserId; // dari middleware authentication
        let options = {
            order: [['createdAt', 'ASC']],
            where: {
                UserId:Number(UserId)
            }
        }
        Todo.findAll(options)
            .then(data => {
                res.status(200).json({todos: data});
            })
            .catch(err => {
                return next(err)
            })
    }

    // router.get('/:id', TodoController.searchTodo);
    static searchTodo(req, res, next){
        let { id } = req.params;
        let UserId = req.currentUserId; // dari middleware authentication
        let options = {
            where: {
                UserId:Number(UserId),
                id: Number(id)
            }
        }
        Todo.findOne(options)
            .then(data => {
                if (!data){
                    return next({
                        name: `NotFound`,
                        message: `Todo with id ${id} NOT FOUND`
                    })
                }
                else {
                    res.status(200).json({todo: data})
                }
            })
            .catch(err => {
                return next(err)
            })
    }

    // router.post('/', TodoController.createTodo);
    static createTodo(req,res, next){
        let { title, description, due_date } = req.body;
        let UserId = req.currentUserId; // dari middleware authentication
        let input = {
            title:title,
            description:description,
            due_date:due_date,
            UserId:Number(UserId)
        }
        Todo.create(input)
            .then(data => {
                res.status(201).json({todo: data})
            })
            .catch(err => {
                return next(err)
            })
    }

    // router.put('/:id', TodoController.updateTodo);
    static updateTodo(req, res, next){
        let { id } = req.params;
        let UserId = req.currentUserId; // dari middleware authentication
        let options = {
            where: {
                UserId:Number(UserId),
                id: Number(id)
            },
            returning: true
        }
        let { title, description, status, due_date } = req.body;
        let input = {
            title,
            description,
            status,
            due_date
        }
        Todo.update(input, options)
            .then (data => {
                res.status(200).json({todo: data[1][0], msg: `todo with id ${id} update`});
            })
            .catch(err => {
                return next(err)
            })

    }

    // router.delete('/:id', TodoController.deleteTodo);
    static deleteTodo(req,res, next){
        let { id } = req.params;
         let UserId = req.currentUserId; // dari middleware authentication
        let options = {
            where: {
                UserId:Number(UserId),
                id: Number(id)
            }
        }
        let todoDelete = null;
        Todo.findOne(options)
            .then(data => {
                todoDelete = data;
                return Todo.destroy(options)
            })
            .then (_ => {
                res.status(200).json({todo: todoDelete, msg: `todo with id ${id} delete`});
            })
            .catch(err => {
                return next(err)
            })
    }

}

module.exports = TodoController;


// ////// catatan /////////////
// status 400 di create x
// status 400 di update x
