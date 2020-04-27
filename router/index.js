let router = require('express').Router();
let TodoCon = require('../controllers/todocon.js')
let UserCon = require('../controllers/usercon.js')

router.get('/', (req,res)=>{
    res.status(200).json({
        msg : 'masuk'
    })
})

router.get('/todos', TodoCon.show )
router.post('/todos', TodoCon.addTodo )
router.patch('/todos/:id', TodoCon.edit )
router.delete('/todos/:id', TodoCon.delete )
router.post('/todos/users/signup', UserCon.signup )


module.exports = router