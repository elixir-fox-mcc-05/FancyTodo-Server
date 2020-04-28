let router = require('express').Router();
let TodoCon = require('../controllers/todocon.js')
let UserCon = require('../controllers/usercon.js')
let users = require('../router/user.js')
let todos = require('../router/todo.js')

router.get('/', (req,res)=>{
    res.status(200).json({
        msg : 'masuk'
    })
})
//  users routes 
router.use ('/users', users )
//  todos routes 
router.use('/todos', todos )





module.exports = router