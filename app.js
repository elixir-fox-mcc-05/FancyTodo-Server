require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/index.js');
const port = 3000
const errHandler = require('./middlewares/errHandler')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)
// app.use(errHandler)

app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})