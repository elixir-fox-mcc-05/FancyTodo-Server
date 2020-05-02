const { Task } = require("../models/index.js")

function authorization(req, res, next){
    console.log("======================")

    Task.findOne({
        where:{
            id: req.params.id
        }
    })
    .then(result => {
        console.log("======================")
        console.log(result)
        console.log("======================")
        if(result){
            if(result.UserId == req.currentUserId){
                return next()
            } else {
                res.status(401).json({
                    name:"Unauthorized", 
                    error: [{message: "User unauthenticated"}]
                })
            }
        } else {
            return next({
                name:"User Not Found", 
                errors: [{message: "User Not Found"}]
            })
        }
    })
    .catch(error =>{
        res.status(500).json({
            name: "Internal Server Error",
            error: [{message: error}]
        })
    })
}

module.exports = authorization