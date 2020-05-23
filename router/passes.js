const router = require('express').Router()
const PassController = require('../controllers/passController')
// const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/', PassController.list)
router.post('/invite', PassController.invite)
router.delete('/delete/:id', PassController.delete)

module.exports = router