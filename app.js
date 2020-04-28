// if (process.env.NODE_ENV == "development"){

// }
// const jquery = require('jquery')
const express = require('express')
const router = require('./router')
const port = process.env.PORT || 3000
const app = express()
const errHandler = require('./middlewares/errHandler')

// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(router)
app.use(errHandler)
// app.use((err,req,res,next) => {
//     res.status(500).send('server error')
// })



app.listen(port , console.log(`listneing ${port}`))