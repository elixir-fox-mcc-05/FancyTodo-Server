"use strict"

if(process.env.NODE_ENV == 'development'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

app.listen(port, () => {
    console.log('app listen to port', port);
  })