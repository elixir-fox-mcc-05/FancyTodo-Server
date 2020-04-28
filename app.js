const express = require('express')
const router = require('./routes')
const app = express();
const port = 3000;
const errHandler = require('./middlewares/errHandler')
require('dotenv').config()

app.use(express.urlencoded({extended : true}));
app.use(router)
app.use(express.json())
app.use(errHandler)

app.listen(port, ()=>{
    console.log('This app is listening to port ', port);
})