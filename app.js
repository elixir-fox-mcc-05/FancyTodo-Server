if (process.env.NODE_ENV == 'development') {
    console.log('Starting....');
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Running on PORT : ' + PORT)
})