const router = require("express").Router()
const todocontroller = require("../controllers/todo")
const {authentication} = require("../middlewares/authentication")
const {authorization} = require("../middlewares/authorization")


//router.use(authentication) -- Untuk semua route jika ingin menggunakan authentikasi
//router.use(authorization) -- Untuk semua route jika ingin menggunakan authorization setelah authentikasi berjalan
//Atau bisa di gunakan sbb
router.post('/',authentication,todocontroller.create)
router.get('/',authentication,todocontroller.readall)
router.get('/member',authentication,todocontroller.viewmember)
router.post('/member',authentication,todocontroller.addmember)
router.get('/:id',authentication,authorization,todocontroller.readone)
router.put('/:id',authentication,authorization,todocontroller.update)
router.put('/:id/status',authentication,authorization,todocontroller.updateStatus)
router.delete('/:id',authentication,authorization,todocontroller.delete)
module.exports = router