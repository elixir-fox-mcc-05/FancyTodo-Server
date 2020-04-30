// if (process.env.NODE_ENV == "development"){

// }
require('dotenv').config()
const express = require('express')
const router = require('./router')
const port = process.env.PORT || 3000
const app = express()
const cors = require('cors')
const errHandler = require('./middlewares/errHandler')

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(router)
app.use(errHandler)




app.listen(port , console.log(`listneing ${port}`))