const express = require('express');
const router = express.Router();
const usersRoute = require('./usersRoute.js');
const todosRoute = require('./todosRoute.js');
const animeRoute = require('./animeRoute.js');
const coronaRoute = require('./coronaRoute.js');

router.use('/corona', coronaRoute);
router.use('/todos', todosRoute);
router.use('/users', usersRoute);
router.use('/anime', animeRoute);
router.use('/', (req, res) => {res.send('Halaman Utama')});


module.exports = router;