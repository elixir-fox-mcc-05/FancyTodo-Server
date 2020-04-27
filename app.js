let express = require('express');
let app = express();
let port = 3000;
let router = require('./router/index.js')

app.use(express.urlencoded({ extended:false }))
app.use(router)



app.listen(port, _=>{
    console.log('app listen to port',port)
})