"use strict"

const {Todo} = require("../models");

function authorization(req, res, next){
    let {id} = req.params

    Todo.findByPk(id)
        .then(result => {
            if(result){
                if(result.UserId == req.currentUserId){
                    next();
                }
                else{
                    throw{
                        msg: "unauthorized",
                        code: 401
                    }
                }
            }
            else{
                throw{
                    msg: "Not found",
                    code: 404
                }
            }
        })
        .catch(err => {
            next(err);
        })
}
module.exports = authorization;