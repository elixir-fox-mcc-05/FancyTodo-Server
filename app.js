require('dotenv').config()//
const express = require('express')
const app = express()
const port = process.env.PORT
const errorHandler = require("./middlewares/errorHandler.js")//
const router = require("./routers/index.js")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use(errorHandler)
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))