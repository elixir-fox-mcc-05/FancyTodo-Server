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
                        code : 401,
                        message : "Sorry, not authorized, please use correct account"
                    }
                }
            } else {
                throw {
                    code : 404,
                    message : "Not found"
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization;