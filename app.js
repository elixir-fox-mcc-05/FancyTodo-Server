if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
let express = require('express')
let app = express()
let port = 3000
let cors = require('cors')
let router = require('./routers')
let errHanlder = require('./middlewares/errHandler')

app.use(cors())
app.use(express.urlencoded ({extended : false}))
app.use(express.json())
app.use(router)
app.use(errHanlder)

app.listen(port, (err) => {
    if(!err) console.log('tis on port', port)
})