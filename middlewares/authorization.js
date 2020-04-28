const { Todo } = require('../models/index.js');

function authorization(req, res, next) {
    let { id } = req.params //dari url
    Todo.findByPk(Number(id))
        .then(result => {
            if(result) {
                if(result.UserId == req.currentUserId){ //req.currentUserId dari authentication
                    next()
                }
                else {
                    res.status(401).json({msg: `Unauthorized`})
                }
            }
            else {
                res.status(404).json({msg: `todo with id ${id} NOT FOUND`})
            }
        })
}

module.exports = authorization;