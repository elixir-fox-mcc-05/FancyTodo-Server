const cool = require('cool-ascii-faces')
require('dotenv').config()
const express = require("express")
const app = express()
//cors untuk komunikasi antara server dan client agar bisa jalan walaupun beda port server
const cors = require("cors")
const PORT = process.env.PORT
const routes = require("./routes")
const errorHandling = require("./middlewares/errorhandling")
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)
app.use(errorHandling)
    
app.listen(PORT,()=>{
    console.log('listen port'+PORT);
    
})