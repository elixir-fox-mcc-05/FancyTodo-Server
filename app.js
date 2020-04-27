const routes = require('./router/index.js')
const express = require('express')
const app = express()
const port = 4000


app.use(express.urlencoded({ extended:false }))
app.use(express.json())


app.use('/todo',routes)




app.listen(port, () => { console.log(`Listening at http://localhost:${port}`)})