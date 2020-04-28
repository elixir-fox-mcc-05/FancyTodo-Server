let router = require('express').Router();
let TodoCon = require('../controllers/todocon.js')
let UserCon = require('../controllers/usercon.js')
let authentication = require('../middelwares/authentication.js')

router.get('/', (req,res)=>{
    res.status(200).json({
        msg : 'masuk'
    })
})


//  users routes 
router.post('/todos/users/signup', UserCon.signup )
router.post('/todos/users/signin', UserCon.signin )


//  todos routes 
router.use(authentication)
router.get('/todos', TodoCon.show )
router.post('/todos', TodoCon.addTodo )
router.patch('/todos/:id', TodoCon.edit )
router.delete('/todos/:id', TodoCon.delete )



module.exports = router