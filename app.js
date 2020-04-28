if (process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

const express = require("express");
const router = require("./routes/index.js");
const errHandler = require("./middlewares/errHandler.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(router);
app.use(errHandler);

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);
})