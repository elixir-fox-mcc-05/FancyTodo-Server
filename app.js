if (process.env.NODE_ENV == 'development') {
    console.log('Starting....');
    require('dotenv').config()
}

const express = require("express")
const router = require("./routers/todo")
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`running on ${PORT}`))
