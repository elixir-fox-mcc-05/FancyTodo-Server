let todos = require('express').Router();
let TodoCon = require('../controllers/todocon.js')
let authentication = require('../middelwares/authentication.js')
let authorization = require('../middelwares/authorization.js')

todos.use(authentication)
todos.get('/', TodoCon.show )
todos.post('/', TodoCon.addTodo )
todos.patch('/:id', authorization , TodoCon.edit )
todos.delete('/:id', authorization , TodoCon.delete )


module.exports = todos