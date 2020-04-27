const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(PORT, _ => console.log(`I love you ${PORT}`))