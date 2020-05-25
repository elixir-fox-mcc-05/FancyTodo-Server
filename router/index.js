const router = require('express').Router()
// const ToDoController = require('../controllers/toDoController')
const UserController = require('../controllers/userController')
const todos = require('../router/todos')
const Axios = require('axios')
const projects = require('./projects')
const passes = require('./passes')
require('dotenv').config();

const CALENDARIFIC = process.env.CALENDARIFIC

// console.log(CALENDARIFIC) 

router.get('/holidays', (req,res) => {
    Axios.get ('https://calendarific.com/api/v2/holidays', {
        params : {
                    'api_key' : CALENDARIFIC,
                    'country' : 'ID',
                    'year' : new Date().getFullYear()
                    }
    })
        .then( response => {
            res.json({
                data : response.data.response.holidays
            })
        })
        .catch(error => {
            res.status(500).json({
                error : error.message
            })
            // console.log(error);
        })
})

router.use('/todos', todos)
router.use('/projects',projects)
router.use('/pass',passes)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/userlist',UserController.list)
router.post('/logingoogle', UserController.googleLogin);
// router.get('/todos', ToDoController.list)
// router.post('/todos', ToDoController.createToDo)
// router.get('/todos/:id', ToDoController.getId)
// router.put('/todos/:id', ToDoController.updateToDo)
// router.delete('/todos/:id', ToDoController.deleteToDo)



module.exports = router