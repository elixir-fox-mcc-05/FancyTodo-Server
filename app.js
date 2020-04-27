// if (process.env.NODE_ENV == "development"){

// }

const express = require('express')
const router = require('./router')
const port = process.env.PORT || 3000
const app = express()

// app.use(express.static(__dirname + "/views"))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(router)
app.use((err,req,res,next) => {
    res.status(500).send('server error')
})



app.listen(port , console.log(`listneing ${port}`))