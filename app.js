require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => { console.log(`listen on http://localhost:${PORT}`) })