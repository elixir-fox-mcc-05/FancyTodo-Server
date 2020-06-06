"use strict"

const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) => {
    axios
        .get("http://www.recipepuppy.com/api/")
        .then(response => {
            const {data} = response;
            res.json({
                recipes: data
            })
        })
        .catch(err => {
            res.status(500).json({
                errors: err
            })
        })
})
module.exports = router;