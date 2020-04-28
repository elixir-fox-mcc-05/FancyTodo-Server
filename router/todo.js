let todos = require('express').Router();
let TodoCon = require('../controllers/todocon.js')
let authentication = require('../middelwares/authentication.js')
let authorization = require('../middelwares/authorization.js')

todos.use(authentication)
todos.get('/todos', TodoCon.show )
todos.post('/todos', TodoCon.addTodo )
todos.patch('/todos/:id', authorization , TodoCon.edit )
todos.delete('/todos/:id', authorization , TodoCon.delete )


module.exports = todos