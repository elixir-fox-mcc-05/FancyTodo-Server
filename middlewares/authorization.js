const { Todo } = require('../models/')

function authorization(req, res, next) {
    let { id } = req.params
    Todo.findByPk(id)
        .then(data => {
            if(data){
                if(data.UserId == req.userId){
                    next()
                } else {
                    res.status(401).json({
                        msg: `unauthorized`
                    })
                }
            } else {
                res.status(400).json({
                    msg: `data not found`
                })
            }
        })
}

module.exports = authorization