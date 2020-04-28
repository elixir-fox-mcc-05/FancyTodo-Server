const { Todo } = require('../models/index.js');

class TodoController {
    // router.get('/', TodoController.readAllTodo);
    static readAllTodo(req, res){
        let options = {
            order: [['createdAt', 'ASC']]
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
        Todo.findByPk(Number(id))
            .then(data => {
                if (!data){
                    res.status(404).json({msg: `todo with id ${id} NOT FOUND`});
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
        let input = {
            title:title,
            description:description,
            due_date:due_date
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
        let options = {
            where: {id:Number(id)}
        }
        let { title, description, status, due_date } = req.body;
        let input = {
            title,
            description,
            status,
            due_date
        }
        let todoUpdate = null;
        Todo.findByPk(Number(id))
            .then(data => {
                todoUpdate = data;
                return Todo.update(input, options)
            })
            .then (_ => {
                if (!todoUpdate){
                    res.status(404).json({msg: `todo with id ${id} NOT FOUND`});
                }
                else {
                    Todo.findByPk(Number(id))
                    .then(data => {
                        res.status(200).json({todo: data, msg: `todo with id ${id} update`});
                    })
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message});
            })

    }

    // router.delete('/:id', TodoController.deleteTodo);
    static deleteTodo(req,res){
        let { id } = req.params;
        let options = {
            where: {
                id:Number(id)
            }
        }
        let todoDelete = null;
        Todo.findByPk(Number(id))
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
