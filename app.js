if(process.env.NODE_ENV.trim() === 'development'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler.js');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
})