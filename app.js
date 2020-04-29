 if(process.env.NODE_ENV == 'development') require('dotenv').config()

const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const errorHandlers = require('./helpers/error_handler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)
app.use(errorHandlers)

app.listen(PORT, () => { console.log(`listen on http://localhost:${PORT}`) })