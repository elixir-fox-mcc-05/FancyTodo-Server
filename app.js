if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/index.js');
const ErrorHandler = require('./middlewares/errorhandler.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', route);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});