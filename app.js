if (process.env.NODE_ENV=="development") {
    require('dotenv').config()
}

let express = require('express');
let cors = require('cors')
let app = express();
let port =process.env.PORT || 3000;
let router = require('./router/index.js')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(router)



app.listen(port, _=>{
    console.log('app listen to port',port)
})