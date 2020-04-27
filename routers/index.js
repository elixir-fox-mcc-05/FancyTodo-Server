const router = require(`express`).Router();

const todoRouter = require(`./todorouter.js`)

router.get(`/`, (req, res) => {
    res.json({
        msg : `Ok`
    })
})

router.use(`/todos`, todoRouter)

module.exports = router