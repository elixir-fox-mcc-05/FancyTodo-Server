if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', route);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});