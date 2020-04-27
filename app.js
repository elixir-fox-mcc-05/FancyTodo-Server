const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')

app.set('port', process.env.PORT)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(port, _=> console.log('I love you', port))