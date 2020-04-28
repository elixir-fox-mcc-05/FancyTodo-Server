if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
let express = require('express')
let app = express()
let port = 3000
let router = require('./routers')

app.use(express.urlencoded ({extended : false}))
app.use(express.json())
app.use(router)

app.listen(port, (err) => {
    if(!err) console.log('tis on port', port)
})