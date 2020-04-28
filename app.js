const express = require('express');
const app = express();
const router = require('./routers');
const port = 3000;
const error = require('./middlewares/errorhandler.js')
require('dotenv').config()

app.use(express.urlencoded({urlencoded: false}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
});