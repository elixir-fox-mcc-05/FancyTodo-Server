const Model = require("../models");
const User = Model.User;
const { verifyToken } = require("../helpers/jwt.js");

const authentication = (req, res, next) => {

    let token = req.headers.token;

    try {
        let decoded = verifyToken(token);
        let id = decoded.id
        User
            .findByPk(id)
            .then(data => {
                if(data){
                    req.loggedInUserId = id
                    next()
                } else {
                    throw {
                        code : 401,
                        type : "UNAUTHORIZED",
                        message : "Please login first!"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    } catch (err) {
        next(err)
    }
}

module.exports = authentication;