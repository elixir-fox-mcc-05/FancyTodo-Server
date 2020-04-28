const Model = require("../models");
const ToDo = Model.ToDo;

const authorization = (req, res, next) => {

    let id = req.params.id

    ToDo
        .findByPk(id)
        .then(data => {
            if (data) {
                if (data.UserId === req.loggedInUserId) {
                    next()
                } else {
                    throw {
                        code : 400,
                        type : "UNAUTHORIZED",
                        message : "Sorry, not authorized, please use correct account"
                    }
                }
            } else {
                throw {
                    code : 404,
                    type : "NOT FOUND",
                    message : "Sorry, not found"
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization;