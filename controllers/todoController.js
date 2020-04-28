const { Todo } = require('../models/index.js');

class TodoController {
    // router.get('/', TodoController.readAllTodo);
    static readAllTodo(req, res){
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
                res.status(500).json({error: err.message});
            })
    }

    // router.get('/:id', TodoController.searchTodo);
    static searchTodo(req, res){
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
                    res.status(404).json({msg: `Todo with id ${id} NOT FOUND`});
                }
                else {
                    res.status(200).json({todo: data})
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })
    }

    // router.post('/', TodoController.createTodo);
    static createTodo(req,res){
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
                res.status(500).json({error: err.message});
            })
    }

    // router.put('/:id', TodoController.updateTodo);
    static updateTodo(req, res){
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
                res.status(500).json({error: err.message});
            })

    }

    // router.delete('/:id', TodoController.deleteTodo);
    static deleteTodo(req,res){
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
                if (!todoDelete){
                    res.status(404).json({msg: `todo with id ${id} NOT FOUND`});
                }
                else {
                    res.status(200).json({todo: todoDelete, msg: `todo with id ${id} delete`});
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })
    }

}

module.exports = TodoController;


// ////// catatan /////////////
// status 400 di create x
// status 400 di update x
// status 404 di search/update/delete ???
