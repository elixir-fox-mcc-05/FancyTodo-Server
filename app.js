if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const error = require('./middleware/errrorHandler.js')
const routes = require('./router/index.js')
const express = require('express')
const app = express()
const port = 3000;


app.use(express.urlencoded({ extended:false }))
app.use(express.json())


app.use(routes)
app.use(error)






app.listen(port, () => { console.log(`Listening at http://localhost:${port}`)})