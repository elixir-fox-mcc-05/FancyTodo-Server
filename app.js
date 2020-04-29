"use strict"

if(process.env.NODE_ENV == 'development'){
  require('dotenv').config();
}

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

const errorHandler = require("./middlewares/errorhandler.js");
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app listen to port', port);
  })