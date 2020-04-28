require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');
const errHandler = require('./middlewares/errHandler.js');

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(router);
app.use(errHandler);

app.listen(port, () => {
  console.log("Todos app at port", port);
});